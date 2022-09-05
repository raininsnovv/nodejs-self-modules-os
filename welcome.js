import os from "os";
export function alertUser() {
  return `Привет, юзер. Вижу ты зашел с ${os.type()}`;
}
