export const validateEmail = (email) => {
  // Проверяем общий формат адреса электронной почты
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; // Доменная часть должна содержать минимум 2 буквы
  // Проверяем наличие двойных точек
  const doubleDotRegex = /\.\./;
  // Проверяем, что адрес не заканчивается на точку
  const endsWithDotRegex = /\.$/;
  // Проверяем, что адрес не начинается с точки
  const startsWithDotRegex = /^\./;

  return (
    emailRegex.test(email) &&
    !doubleDotRegex.test(email) &&
    !endsWithDotRegex.test(email) &&
    !startsWithDotRegex.test(email)
  );
};

export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/;
  return passwordRegex.test(password);
};
