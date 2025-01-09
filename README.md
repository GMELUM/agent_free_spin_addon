# FreeSpin Компонент

## Свойства (Props)

`FreeSpin` принимает следующие свойства:

| **Свойство**  | **Тип**                    | **Обязательное** | **Описание**                                                                         |
| ------------- | -------------------------- | ---------------- | ------------------------------------------------------------------------------------ |
| `ap`          | `number`                   | Нет              | Текущий баланс AP.                                                                   |
| `not`         | `number`                   | Нет              | Текущий баланс NOT.                                                                  |
| `ton`         | `number`                   | Нет              | Текущий баланс TON.                                                                  |
| `symbols`     | `Symbols[]`                | Да               | Массив символов для спиннера. Каждый символ должен иметь `key` и `element`.          |
| `combination` | `[string, string, string]` | Да               | Результат текущего вращения в виде массива ключей символов.                          |
| `prize`       | `string`                   | Нет              | Текст приза после вращения. По умолчанию `"-"`.                                      |
| `onSpin`      | `() => void`               | Да               | Обработчик запуска вращения.                                                         |
| `onShop`      | `() => void`               | Нет              | Обработчик нажатия кнопки для открытия магазина.                                     |
| `onExecute`   | `() => void`               | Да               | Обработчик завершения успешного вращения.                                            |
| `onRate`      | `(rate: string) => string` | Да               | Функция обработки изменения ставки. Принимает текущую ставку и возвращает следующую. |

---

## Пример использования

Пример интеграции компонента `FreeSpin` в React-приложение:

```ts
import React, { useState } from "react";
import FreeSpin from "./components/FreeSpin";
import { Symbols } from "./components/Spinner/Slot";

const symbols: Symbols = [
  { key: "coin_not", element: <img src="coin_not.png" alt="coin_not" /> },
  { key: "coin_ton", element: <img src="coin_ton.png" alt="coin_ton" /> },
  { key: "coin_ap", element: <img src="coin_ap.png" alt="coin_ap" /> },
  // Добавьте другие символы...
];

const App = () => {
  const [combination, setCombination] = useState<[string, string, string]>([
    "empty",
    "empty",
    "empty",
  ]);
  const [count, setCount] = useState(0);

  const handleSpin = () => {
    const keys = symbols.map((symbol) => symbol.key);
    const shuffled = keys.sort(() => Math.random() - 0.5);
    setCombination(shuffled.slice(0, 3) as [string, string, string]);
    setCount(0);
  };

  const handleExecute = () => {
    setCount(Math.floor(Math.random() * 10000)); // Симуляция расчёта приза
  };

  return (
    <div>
      <FreeSpin
        ap={1000}
        not={500}
        ton={300}
        symbols={symbols}
        combination={combination}
        prize={count > 0 ? `${count} AP` : "-"}
        onSpin={handleSpin}
        onExecute={handleExecute}
        onRate={(rate) => {
          const rates = ["SPIN x1", "SPIN x5", "SPIN x10", "SPIN x1000"];
          const index = rates.indexOf(rate);
          return index === -1 || index === rates.length - 1 ? rates[0] : rates[index + 1];
        }}
        onShop={() => console.log("Магазин открыт")}
      />
    </div>
  );
};

export default App;
```