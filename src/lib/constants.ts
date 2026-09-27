export const TELEGRAM_BOT_URL = 'https://t.me/aibasedfinancecontrolbot_bot'

/** Доступ пока по приглашениям: /start request — бот передаёт заявку админу. */
export const TELEGRAM_REQUEST_URL = `${TELEGRAM_BOT_URL}?start=request`

/** Цена полного тарифа — в звёздах Telegram (только ими можно платить за цифровое внутри Telegram). */
export const PRICE_STARS = 500
/** Примерно в тенге: сколько стоят 500 звёзд при покупке в Telegram — зависит от способа покупки. */
export const PRICE_KZT_APPROX = '4 400 ₸'
