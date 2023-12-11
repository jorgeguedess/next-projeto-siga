export const normalizeCpfNumber = (value: String | undefined) => {
  if (!value) return "";
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const normalizePassword = (value: string) => {
  // Sua lógica de validação da senha aqui
  // Certifique-se de retornar true se a senha for válida e false se não for
  return value.length >= 4 && /[A-Za-z]/.test(value) && /\d/.test(value);
};
