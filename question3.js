function solution(S, K) {
  if (k > 500) return;

  let dayArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let inputIndex = dayArray.indexOf(S);

  let newIndex = inputIndex + K;

  if (newIndex <= 6) {
    return dayArray[newIndex];
  }

  if (newIndex > 6) {
    let weeksToSubtract = Math.floor(newIndex / 7);
    let daysToSubtract = 7 * weeksToSubtract;

    newIndex = inputIndex + K - daysToSubtract;

    return dayArray[newIndex];
  }
}

console.log(solution("Sat", 23));
