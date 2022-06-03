class CustomSelect {
  #options;
  #id;
  #currentSelectedOption;

  constructor(id, options) {
    (this.#id = id), (this.#options = options), this.#currentSelectedOption;
  }

  get #selectedValue() {
    return this.#currentSelectedOption;
  }

  render(container) {
    let numOfDataValue = 1;
    const selectDropdown = document.createElement("div");
    selectDropdown.className = `select-dropdown select-dropdown--${this.#id}`;
    const selectDropdownButton = document.createElement("button");
    selectDropdownButton.className = `select-dropdown__button select-dropdown__button--${
      this.#id
    }`;
    const selectDropdownSpan = document.createElement("span");
    selectDropdownSpan.className = `select-dropdown select-dropdown--${
      this.#id
    }`;
    selectDropdownSpan.textContent = "Выберите элемент";
    selectDropdownButton.append(selectDropdownSpan);
    selectDropdown.append(selectDropdownButton);

    const selectDropdownList = document.createElement("ul");
    selectDropdownList.className = `select-dropdown__list select-dropdown__list--${
      this.#id
    }`;

    const selectDropdownListValues = [
      "JavaScript",
      "NodeJS",
      "ReactJS",
      "HTML",
      "CSS",
    ];

    for (let i = 0; i < 5; i++) {
      const selectDropdownItem = document.createElement("li");
      selectDropdownItem.textContent = selectDropdownListValues[i];
      selectDropdownItem.className = `select-dropdown__list-item`;
      selectDropdownItem.dataset.value = i + 1;
      selectDropdownList.append(selectDropdownItem);
    }

    selectDropdown.append(selectDropdownButton);
    selectDropdown.append(selectDropdownList);
    container.append(selectDropdown);

    selectDropdownButton.addEventListener("click", () => {
      selectDropdownList.classList.toggle("active");
    });

    selectDropdownList.addEventListener("click", (event) => {
      const { target } = event;

      const selectDropdownText = document.createElement("span");
      selectDropdownText.className = "text";
      const selectItemDataValue = target.dataset.value;
      //   this.#currentSelectedOption = this.#options[selectItemDataValue - 1];
      this.#options.forEach((option) => {
        if (option.value === Number(selectItemDataValue)) {
          this.#currentSelectedOption = option;
          selectDropdownSpan.textContent = option.text;
        }
      });
      const selectItem = document.querySelectorAll(
        ".select-dropdown__list-item"
      );
      selectItem.forEach((item) => {
        item.classList.remove("selected");
      });
      target.classList.add("selected");
      console.log(this.#selectedValue);
      selectDropdownList.classList.toggle("active");
    });
  }
}

const options = [
  { value: 1, text: "JavaScript" },
  { value: 2, text: "NodeJS" },
  { value: 3, text: "ReactJS" },
  { value: 4, text: "HTML" },
  { value: 5, text: "CSS" },
];

const customSelect = new CustomSelect("markPrivet", options);
const mainContainer = document.querySelector("#container");
customSelect.render(mainContainer);
