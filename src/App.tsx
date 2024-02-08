import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Hayır",
      "Emin misin?",
      "Gerçekten mi?",
      "Bir daha düşün!",
      "Kızıyorum bak!",
      "Cidden istemez misin?",
      "Bak pişman olursun!",
      "Bir daha düşün yahu!",
      "Gerçekten emin misin bundan?",
      "Yanlış düşünüyorsun!",
      "Az kalbin olsun!",
      "Soğuk yapma yahu!",
      "Fikrini değiştirdin mi?",
      "Bir daha düşünmeyecek misin?",
      "Son kararın mı?",
      "Kalbim çıt ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <a
        href="https://github.com/sarpremziaksu/valentines-day"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        GitHub: sarpremziaksu
      </a>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Olleeeeey!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Sevgilim olur musun Tomris?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Evet
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
