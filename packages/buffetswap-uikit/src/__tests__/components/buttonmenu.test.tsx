import React from "react";
import { renderWithTheme } from "../../testHelpers";
import ButtonMenu from "../../components/ButtonMenu/ButtonMenu";
import ButtonMenuItem from "../../components/ButtonMenu/ButtonMenuItem";

const handleClick = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <ButtonMenu activeIndex={0} onItemClick={handleClick}>
      <ButtonMenuItem>Item 1</ButtonMenuItem>
      <ButtonMenuItem>Item 2</ButtonMenuItem>
    </ButtonMenu>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      background-color: #EFF4F5;
      border-radius: 28px;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      border: 1px solid #E9EAEB;
      width: auto;
    }

    .c0 > button,
    .c0 > a {
      -webkit-flex: auto;
      -ms-flex: auto;
      flex: auto;
      box-shadow: "none";
    }

    .c0 > button + button,
    .c0 > a + a {
      margin-left: 2px;
    }

    .c1 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 16px;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 18px;
      font-weight: 700;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 55px;
      padding: 0 32px;
      background: linear-gradient(79.95deg,#FF623F 3.11%,#FF8C38 52.98%,#FF2F9F 126.12%);
      color: white;
    }

    .c1:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c1:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c1:disabled,
    .c1.pancake-button--disabled {
      background: linear-gradient(79.95deg,#FF623F 3.11%,#FF8C38 52.98%,#FF2F9F 126.12%);
      opacity: 0.5;
      border-color: linear-gradient(79.95deg,#FF623F 3.11%,#FF8C38 52.98%,#FF2F9F 126.12%);
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c2 {
      background-color: transparent;
      color: #EF5823;
    }

    .c2:hover:not(:disabled):not(:active) {
      background-color: transparent;
    }

    <div
        class="c0"
      >
        <button
          class="c1"
          scale="md"
        >
          Item 1
        </button>
        <button
          class="c1 c2"
          scale="md"
        >
          Item 2
        </button>
      </div>
    </DocumentFragment>
  `);
});
