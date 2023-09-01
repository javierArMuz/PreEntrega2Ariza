export const regExpressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{3,18}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{10,11}$/ // 10 a 11 numeros.
}