import Head from "next/head";
import { loremIpsum } from "lorem-ipsum";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [valueLorem, setValueLorem] = useState(0);
  const [typeOfText, setTypeOfText] = useState("paragraphs");
  const copyDiv = useRef<HTMLDivElement>(null);
  const [copyAction, setCopyAction] = useState(false);

  function handleCopyText() {
    if (copyDiv.current?.innerText) {
      navigator.clipboard.writeText(copyDiv.current.innerText);
    }
    setCopyAction(false);
  }

  return (
    <>
      <Head>
        <title>H Lorem Ipsum | Create Lorem Ipsum</title>
      </Head>
      <header>
        <div className="container">
          <img src="hlorem_logo.png" alt="H Lorem Ipsum logo" />

          <select
            value={typeOfText}
            onChange={(event) => setTypeOfText(String(event.target.value))}
            name="typeOfText"
            id="typeOfText"
          >
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>
        </div>
      </header>
      <main>
        <div className="container">
          <form>
            <input
              type="number"
              name="numberLorem"
              id="numberLorem"
              placeholder={`How many ${typeOfText} do you need from Lorem Ipsum??`}
              onChange={(event) => setValueLorem(Number(event.target.value))}
              min="1"
              max="100"
            />
          </form>

          <section className="announcement"></section>

          <section className="contentLorem" id="contentLorem">
            <div className="boxCopy">
              <button
                id="copyBox"
                className="copyBox"
                onClick={() => handleCopyText()}
              >
                <span>Copy the text</span>
                <img src="copy.svg" alt="Copy Img H Lorem Ipsum" />
              </button>
            </div>
            {valueLorem <= 0 || valueLorem > 100 ? (
              <div ref={copyDiv}>
                <p id="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus laoreet mattis hendrerit. Mauris eget odio id eros
                  venenatis porttitor sed cursus dui. Ut quis felis vel risus
                  volutpat tincidunt at a nulla. Quisque nec sollicitudin ipsum.
                  Aenean ligula magna, porta a eleifend ullamcorper, porta sit
                  amet arcu. Nullam dictum sodales facilisis. Vestibulum finibus
                  volutpat nisi at volutpat. Sed id dictum magna, nec ornare
                  ligula. In eu interdum leo. Pellentesque et convallis diam.
                  Duis aliquet arcu sit amet orci ultrices, eu blandit nunc
                  posuere. Vivamus dapibus, ligula consectetur volutpat
                  elementum, arcu lorem porttitor dui, condimentum efficitur
                  odio velit ut diam. Ut vitae eros dui. Aliquam laoreet massa
                  elit, id placerat libero feugiat eu. Suspendisse faucibus
                  imperdiet congue.
                </p>

                <p id="paragraph">
                  Mauris ipsum dui, pretium vitae venenatis eu, blandit quis
                  nibh. In hac habitasse platea dictumst. In hac habitasse
                  platea dictumst. Aenean vehicula elementum varius. Curabitur
                  ut tortor vel enim facilisis consequat sit amet aliquet ante.
                  Nam feugiat ac turpis eu tincidunt. In sed laoreet sapien,
                  condimentum tempus nibh. Duis non ipsum augue. Quisque nec
                  lacus id leo fermentum sagittis. Interdum et malesuada fames
                  ac ante ipsum primis in faucibus. Aenean malesuada at nibh non
                  suscipit.
                </p>

                <p id="paragraph">
                  Donec tortor felis, mollis in ipsum quis, iaculis rhoncus
                  quam. Nam odio ex, rutrum sed est et, porttitor scelerisque
                  diam. Nunc aliquam est vitae sapien elementum facilisis. Ut
                  pharetra maximus ligula ac tempus. Phasellus luctus luctus
                  hendrerit. Duis fermentum efficitur felis quis vehicula. Fusce
                  ut egestas arcu, sed tristique nulla. Praesent orci magna,
                  scelerisque in orci volutpat, condimentum pulvinar nibh.
                  Quisque nunc mauris, tempus id ante sit amet, mollis accumsan
                  tellus. Praesent aliquet lacinia maximus. Etiam semper enim
                  arcu, at fringilla urna placerat in. Integer nec mollis purus,
                  sed vehicula purus.
                </p>

                <p id="paragraph">
                  Proin sit amet metus nibh. Quisque eleifend velit nec ligula
                  consequat, at tempor nunc ultricies. Curabitur pulvinar a urna
                  ut suscipit. Maecenas rutrum mi augue, quis imperdiet purus
                  suscipit id. Vestibulum tincidunt orci eu blandit tempor.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; In aliquet fermentum elit, sit
                  amet dictum est laoreet a. Curabitur vulputate fringilla
                  suscipit. Donec sit amet facilisis nisl. Nulla justo orci,
                  ullamcorper eu congue vitae, ornare sed nulla. Proin turpis
                  massa, sagittis in vestibulum quis, interdum nec nulla.
                  Vivamus molestie eleifend rhoncus.
                </p>
              </div>
            ) : (
              <div className="copy">
                <div
                  ref={copyDiv}
                  dangerouslySetInnerHTML={{
                    __html: loremIpsum({
                      count: valueLorem,
                      format: "html",
                      paragraphLowerBound: 6, // Min. number of sentences per paragraph.
                      paragraphUpperBound: 10, // Max. number of sentences per paragarph.
                      sentenceLowerBound: 8, // Min. number of words per sentence.
                      sentenceUpperBound: 20, // Max. number of words per sentence.
                      suffix: "\r\n", // Line ending, defaults to "\n" or "\r\n" (win32)
                      units: `${typeOfText}`, // paragraph(s), "sentence(s)", or "word(s)"
                    }),
                  }}
                  // ref={text}
                />
              </div>
            )}
          </section>
        </div>
      </main>
      <footer>Hildebrando Viana Matos - 2021</footer>
    </>
  );
}
