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
  const accountId = localStorage.getItem("accountId");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accountId || !refreshToken) {
    console.error("[토큰 재발급 실패] accountId 또는 refreshToken 없음.");

    clearInterval(interval14min);
    // clearInterval(interval10sec);

    console.log("[토큰 재발급 종료] 로그아웃 완료.");

    return;
  }

  console.log(
    `[토큰 재발급 시도] accountId=${accountId}, 시간=${new Date().toLocaleString()}`
  );

  try {
    const response = await fetch("http://54.180.153.221:8080/auth/reissue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accountId, refreshToken }),
    });

    if (!response.ok) {
      console.error(`[토큰 재발급 실패] HTTP ${response.status}`);
      return;
    }

    const data = await response.json();

    if (!data || !data.accessToken || !data.refreshToken) {
      console.error(
        "[토큰 재발급 실패] 응답 데이터가 올바르지 않습니다:",
        data
      );
      return;
    }

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);

    let accessTokenNumber = parseInt(getCookie("accessTokenNumber") || "0", 10);
    accessTokenNumber += 1;
    setCookie("accessTokenNumber", accessTokenNumber);

    console.log(
      `[토큰 재발급 성공] accessTokenNumber=${accessTokenNumber}, 시간=${new Date().toLocaleString()}`
    );
  } catch (error) {
    console.error("[토큰 재발급 실패] 알 수 없는 오류:", error);
  }
}

let interval14min;
// let interval10sec;

export function startTokenAutoReissue() {
  reissueAccessToken();
  interval14min = setInterval(reissueAccessToken, 14 * 60 * 1000); // 15분 간격
  // interval10sec = setInterval(reissueAccessToken, 10 * 1000); // 10초 간격
}
