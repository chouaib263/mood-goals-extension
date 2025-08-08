document.getElementById("generate").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const goalsList = document.getElementById("goals-list");
  goalsList.innerHTML = "";

  let goals = [];

  if (mood === "happy") {
    goals = ["شارك فرحتك مع شخص تحبه", "اكتب 3 أشياء أنت ممتن لها", "قم بنزهة قصيرة"];
  } else if (mood === "tired") {
    goals = ["خذ استراحة لمدة 10 دقائق", "اشرب كأس ماء", "افعل تمرين تنفس"];
  } else if (mood === "stressed") {
    goals = ["دوّن ما يقلقك", "مارس التأمل 5 دقائق", "استمع لموسيقى هادئة"];
  } else if (mood === "motivated") {
    goals = ["ابدأ أصعب مهمة اليوم", "ضع خطة للـ 3 أيام القادمة", "شارك إنجازك على وسائل التواصل"];
  }

  goals.forEach(goal => {
    const li = document.createElement("li");
    li.textContent = goal;
    goalsList.appendChild(li);
  });
});
