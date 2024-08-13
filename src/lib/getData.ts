export function getData() {
  const now = new Date();

  // 한국 시간대로 변환
  const koreaTime = new Date(
    now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
  );

  // 날짜와 시간 형식 변경
  const formattedTime = koreaTime.toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return {
    buildTime: formattedTime,
  };
}
