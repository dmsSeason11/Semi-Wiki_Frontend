let intervalId = null;
let isReissuing = false;

//----------------------------------------
// 재발급 간격: 14분
const REISSUE_INTERVAL = 14 * 60 * 1000;
//----------------------------------------

// //----------------------------------------
// // 재발급 간격: 10초 (테스트용)
// const REISSUE_INTERVAL = 10 * 1000;
// //----------------------------------------

function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, days = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(
    value
  )};expires=${expires.toUTCString()};path=/`;
}

export async function reissueAccessToken() {
  if (isReissuing) return;
  isReissuing = true;

  const accountId = localStorage.getItem("accountId");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accountId || !refreshToken) {
    console.error("[토큰 재발급 실패] accountId 또는 refreshToken 없음.");
    stopTokenAutoReissue();
    console.log("[토큰 재발급 종료] 로그아웃 처리 완료.");
    isReissuing = false;
    return;
  }

  console.log(
    `[토큰 재발급 시도] accountId=${accountId}, 시간=${new Date().toLocaleString()}`
  );

  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/reissue`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accountId, refreshToken }),
      }
    );

    if (!response.ok) {
      console.error(`[토큰 재발급 실패] HTTP ${response.status}`);
      isReissuing = false;
      return;
    }

    const data = await response.json();

    if (!data?.accessToken || !data?.refreshToken) {
      console.error(
        "[토큰 재발급 실패] 응답 데이터가 올바르지 않습니다:",
        data
      );
      isReissuing = false;
      return;
    }

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("lastReissueTime", Date.now());

    let accessTokenNumber = parseInt(getCookie("accessTokenNumber") || "0", 10);
    accessTokenNumber += 1;
    setCookie("accessTokenNumber", accessTokenNumber);

    console.log(
      `[토큰 재발급 성공] accessTokenNumber=${accessTokenNumber}, 시간=${new Date().toLocaleString()}`
    );
    console.log(
      `[토큰 재발급 시간 갱신] lastReissueTime=${localStorage.getItem(
        "lastReissueTime"
      )}`
    );
  } catch (err) {
    console.error("[토큰 재발급 실패] 알 수 없는 오류:", err);
  } finally {
    isReissuing = false;
  }
}

// ------------------------
// Interval 관리
// ------------------------
export function startTokenAutoReissue() {
  if (intervalId) {
    console.log("[토큰 재발급] 이미 Interval 실행 중, 중복 방지");
    return;
  }

  const last = parseInt(localStorage.getItem("lastReissueTime") || "0", 10);
  const now = Date.now();
  const remaining = Math.max(REISSUE_INTERVAL - (now - last), 0);

  console.log(
    `[토큰 재발급] 남은 시간: ${Math.round(remaining / 1000)}초 후 재발급 실행`
  );

  setTimeout(() => {
    reissueAccessToken();
    intervalId = setInterval(reissueAccessToken, REISSUE_INTERVAL);
    console.log(
      `[토큰 재발급] Interval 시작, ${REISSUE_INTERVAL / 60000}분 간격`
    );
  }, remaining);

  // 다중 탭 이벤트 감지
  window.addEventListener("storage", (event) => {
    if (event.key === "lastReissueTime") {
      console.log("[토큰 재발급] 다른 탭에서 재발급 감지, Interval 재설정");

      if (intervalId) {
        clearInterval(intervalId);
        intervalId = setInterval(reissueAccessToken, REISSUE_INTERVAL);
        console.log("[토큰 재발급] Interval 재설정 완료");
      }
    }
  });
}

export function stopTokenAutoReissue() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("[토큰 재발급] Interval 종료");
  }
}
