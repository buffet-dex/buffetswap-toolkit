import React from "react";
import { renderWithTheme } from "../../testHelpers";
import BalanceInput from "../../components/BalanceInput/BalanceInput";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<BalanceInput value="14" currencyValue="15 USD" onUserInput={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }

    .c2 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c5 {
      color: rgba(32,32,32,0.5);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.5;
      padding-right: 48px;
      font-size: 12px;
      text-align: right;
    }

    .c3 {
      background-color: #eeeaf4;
      border: 0;
      border-radius: 16px;
      color: #272727;
      display: block;
      font-size: 16px;
      height: 48px;
      outline: 0;
      padding: 0 16px;
      width: 100%;
    }

    .c3::-webkit-input-placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3::-moz-placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3:-ms-input-placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3::placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3:disabled {
      background-color: linear-gradient(79.95deg,#FF623F 3.11%,#FF8C38 52.98%,#FF2F9F 126.12%);
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c3:focus:not(:disabled) {
      box-shadow: 0px 0px 0px 1px #7645D9,0px 0px 0px 4px rgba(118,69,217,0.6);
    }

    .c0 {
      background-color: #eeeaf4;
      border: 1px solid #444444;
      border-radius: 16px;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      padding: 8px 16px;
    }

    .c4 {
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      padding-left: 0;
      padding-right: 0;
      font-size: 30px;
      font-weight: 700;
      text-align: right;
      border: none;
    }

    .c4::-webkit-input-placeholder {
      color: #202020;
    }

    .c4::-moz-placeholder {
      color: #202020;
    }

    .c4:-ms-input-placeholder {
      color: #202020;
    }

    .c4::placeholder {
      color: #202020;
    }

    .c4:focus:not(:disabled) {
      box-shadow: none;
    }

    <div
        class="c0"
      >
        <div
          class="c1"
        >
          <div
            class=""
          >
            <div
              class="c2"
            >
              <input
                class="c3 c4"
                inputmode="decimal"
                min="0"
                pattern="^[0-9]*[.,]?[0-9]{0,18}$"
                placeholder="0.0"
                scale="md"
                value="14"
              />
            </div>
            <div
              class="c5"
              color="textSubtleOpacity"
              font-size="12px"
            >
              15 USD
            </div>
          </div>
        </div>
      </div>
    </DocumentFragment>
  `);
});

it("renders correctly with unit prop", () => {
  const { asFragment } = renderWithTheme(
    <BalanceInput value="14" currencyValue="15 USD" unit="CAKE" onUserInput={handleChange} />
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }

    .c2 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c5 {
      color: #272727;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    .c7 {
      color: rgba(32,32,32,0.5);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.5;
      padding-right: 48px;
      font-size: 12px;
      text-align: right;
    }

    .c3 {
      background-color: #eeeaf4;
      border: 0;
      border-radius: 16px;
      color: #272727;
      display: block;
      font-size: 16px;
      height: 48px;
      outline: 0;
      padding: 0 16px;
      width: 100%;
    }

    .c3::-webkit-input-placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3::-moz-placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3:-ms-input-placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3::placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3:disabled {
      background-color: linear-gradient(79.95deg,#FF623F 3.11%,#FF8C38 52.98%,#FF2F9F 126.12%);
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c3:focus:not(:disabled) {
      box-shadow: 0px 0px 0px 1px #7645D9,0px 0px 0px 4px rgba(118,69,217,0.6);
    }

    .c6 {
      margin-left: 4px;
      text-align: right;
      color: #202020;
      white-space: nowrap;
    }

    .c0 {
      background-color: #eeeaf4;
      border: 1px solid #444444;
      border-radius: 16px;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      padding: 8px 16px;
    }

    .c4 {
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      padding-left: 0;
      padding-right: 0;
      font-size: 30px;
      font-weight: 700;
      text-align: right;
      border: none;
    }

    .c4::-webkit-input-placeholder {
      color: #202020;
    }

    .c4::-moz-placeholder {
      color: #202020;
    }

    .c4:-ms-input-placeholder {
      color: #202020;
    }

    .c4::placeholder {
      color: #202020;
    }

    .c4:focus:not(:disabled) {
      box-shadow: none;
    }

    <div
        class="c0"
      >
        <div
          class="c1"
        >
          <div
            class=""
          >
            <div
              class="c2"
            >
              <input
                class="c3 c4"
                inputmode="decimal"
                min="0"
                pattern="^[0-9]*[.,]?[0-9]{0,18}$"
                placeholder="0.0"
                scale="md"
                value="14"
              />
              <div
                class="c5 c6"
                color="text"
              >
                CAKE
              </div>
            </div>
            <div
              class="c7"
              color="textSubtleOpacity"
              font-size="12px"
            >
              15 USD
            </div>
          </div>
        </div>
      </div>
    </DocumentFragment>
  `);
});

it("renders correctly with unit prop and switchEditingUnits", () => {
  const { asFragment } = renderWithTheme(
    <BalanceInput
      value="14"
      currencyValue="15 USD"
      unit="CAKE"
      switchEditingUnits={jest.fn()}
      onUserInput={handleChange}
    />
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c7 {
      padding-left: 12px;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }

    .c2 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c11 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #202020;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c5 {
      color: #272727;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    .c12 {
      color: rgba(32,32,32,0.5);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.5;
      padding-right: 48px;
      font-size: 12px;
      text-align: right;
    }

    .c3 {
      background-color: #eeeaf4;
      border: 0;
      border-radius: 16px;
      color: #272727;
      display: block;
      font-size: 16px;
      height: 48px;
      outline: 0;
      padding: 0 16px;
      width: 100%;
    }

    .c3::-webkit-input-placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3::-moz-placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3:-ms-input-placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3::placeholder {
      color: rgba(32,32,32,0.5);
    }

    .c3:disabled {
      background-color: linear-gradient(79.95deg,#FF623F 3.11%,#FF8C38 52.98%,#FF2F9F 126.12%);
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c3:focus:not(:disabled) {
      box-shadow: 0px 0px 0px 1px #7645D9,0px 0px 0px 4px rgba(118,69,217,0.6);
    }

    .c8 {
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
      height: 47px;
      padding: 0 24px;
      background-color: transparent;
      color: #EF5823;
      box-shadow: none;
    }

    .c8:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c8:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c8:disabled,
    .c8.pancake-button--disabled {
      background: linear-gradient(79.95deg,#FF623F 3.11%,#FF8C38 52.98%,#FF2F9F 126.12%);
      opacity: 0.5;
      border-color: linear-gradient(79.95deg,#FF623F 3.11%,#FF8C38 52.98%,#FF2F9F 126.12%);
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c9 {
      padding: 0;
      width: 32px;
      background: none;
    }

    .c10 {
      width: 16px;
    }

    .c6 {
      margin-left: 4px;
      text-align: right;
      color: #202020;
      white-space: nowrap;
    }

    .c0 {
      background-color: #eeeaf4;
      border: 1px solid #444444;
      border-radius: 16px;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      padding: 8px 16px;
    }

    .c4 {
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      padding-left: 0;
      padding-right: 0;
      font-size: 30px;
      font-weight: 700;
      text-align: right;
      border: none;
    }

    .c4::-webkit-input-placeholder {
      color: #202020;
    }

    .c4::-moz-placeholder {
      color: #202020;
    }

    .c4:-ms-input-placeholder {
      color: #202020;
    }

    .c4::placeholder {
      color: #202020;
    }

    .c4:focus:not(:disabled) {
      box-shadow: none;
    }

    <div
        class="c0"
      >
        <div
          class="c1"
        >
          <div
            class=""
          >
            <div
              class="c2"
            >
              <input
                class="c3 c4"
                inputmode="decimal"
                min="0"
                pattern="^[0-9]*[.,]?[0-9]{0,18}$"
                placeholder="0.0"
                scale="md"
                value="14"
              />
              <div
                class="c5 c6"
                color="text"
              >
                CAKE
              </div>
              <div
                class="c7 c2"
              >
                <button
                  class="c8 c9 c10"
                  scale="sm"
                >
                  <svg
                    class="c11"
                    color="textSubtle"
                    viewBox="0 0 26 26"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      fill="black"
                      fill-opacity="0.05"
                      height="26"
                      rx="13"
                      transform="rotate(-180 26 26)"
                      width="26"
                      x="26"
                      y="26"
                    />
                    <path
                      d="M17.2374 7.26244L15.1449 9.35494C14.9049 9.59494 15.0699 9.99994 15.4074 9.99994H16.7499V15.1599C16.7499 15.9099 16.2474 16.6074 15.5049 16.7274C14.5674 16.8849 13.7499 16.1574 13.7499 15.2499V10.1274C13.7499 8.55994 12.6024 7.16494 11.0424 7.01494C10.6258 6.97389 10.2052 7.02054 9.80767 7.15188C9.41016 7.28322 9.04457 7.49635 8.73442 7.77753C8.42426 8.05872 8.17643 8.40174 8.00686 8.7845C7.8373 9.16727 7.74977 9.5813 7.7499 9.99994V15.2499H6.4074C6.0699 15.2499 5.9049 15.6549 6.1449 15.8874L8.2374 17.9799C8.3874 18.1299 8.6199 18.1299 8.7699 17.9799L10.8624 15.8874C10.9142 15.8346 10.9492 15.7675 10.963 15.6948C10.9768 15.6221 10.9688 15.5469 10.9399 15.4787C10.911 15.4105 10.8626 15.3524 10.8008 15.3117C10.7389 15.271 10.6664 15.2495 10.5924 15.2499H9.2499V10.0899C9.2499 9.33994 9.7524 8.64244 10.4949 8.52244C11.4324 8.36494 12.2499 9.09244 12.2499 9.99994V15.1224C12.2499 16.6899 13.3974 18.0849 14.9574 18.2349C16.7424 18.4074 18.2499 17.0049 18.2499 15.2499V9.99994H19.5924C19.9299 9.99994 20.0949 9.59494 19.8549 9.36244L17.7624 7.26994C17.6199 7.11994 17.3799 7.11994 17.2374 7.26244Z"
                      fill="black"
                      fill-opacity="0.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="c12"
              color="textSubtleOpacity"
              font-size="12px"
            >
              15 USD
            </div>
          </div>
        </div>
      </div>
    </DocumentFragment>
  `);
});
