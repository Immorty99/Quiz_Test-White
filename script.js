document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const correctAnswers = {
    q1: 'C',
    q2: 'B',
    q3: 'D'
  };

  let score = 0;
  let total = Object.keys(correctAnswers).length;

  for (let key in correctAnswers) {
    let selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === correctAnswers[key]) {
      score++;
    }
  }

  document.getElementById('result').innerText =
    `You scored ${score} out of ${total}`;
});
