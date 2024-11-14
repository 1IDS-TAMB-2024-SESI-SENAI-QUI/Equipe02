<script>
    function submitQuiz() {
        let correctAnswers = {
            "q1": "B",
            "q2": "B",
            "q3": "A",
            "q4": "B",
            "q5": "B",
            "q6": "A",
            "q7": "B",
            "q8": "B",
            "q9": "A",
            "q10":"A"
        };
	
        let score = 0;
      const form = document.getElementById('quizForm');
      const resultElement = document.getElementById('result');

      // Verifica as respostas
      for (let i = 1; i <= 10; i++) {
        const answer = form.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === correctAnswers[`q${i}`]) {
          score++;
        }
      }

      // Exibe o resultado
      resultElement.innerHTML = `Você acertou ${score} de 10 perguntas!`;
    }
  </script>