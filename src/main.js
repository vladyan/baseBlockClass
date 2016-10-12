class Block {
    constructor() {
        this.blockName = "";
        this.elementSeparator = "__";
        this.modSeparator = "_";
    }

    /**
     * Добавить к ноде дополнительные свойтва и методы
     * @name    {string} Имя элемента
     * @element {object} DOM node object
     */
    addElementMethodsAndProperties(name, element) {
        element.name = name;
        element.addMod = this.addMod;
        element.removeMod = this.removeMod;
        element.toggleMod = this.toggleMod;
        element.hasMod = this.hasMod;
        element.blockCtx = this;

        return element;
    }

    /**
     * Формирует полный селектор модификатора (вместе с именем блока или элемента)
     *
     * @name    {string} Имя блока или элемента
     * @modName {string} Имя модификатора
     * @value   {string} значение модификатора
     * @return  {string}
     */
    getFullModClassName(name, modName, value = null) {
        let modFullClassName = this.blockName +
                               this.elementSeparator +
                               name +
                               this.modSeparator +
                               modName;

        if (value) {
            modFullClassName += '_' + value
        }

        return modFullClassName;
    }

    /**
     * Формирует полный селектор элемента
     * @name {string} имя элемента
     * @return {string}
     */
    getFullElementClassName(name) {
        let className = '.' +  this.blockName + this.elementSeparator + name;
        return className;
    }

    /**
     * Получить элемент по имени
     * @name {string} имя блока
     */
    element(name) {
        let selector = this.getFullElementClassName(name);
        let node = document.querySelector(selector);
        let element = this.addElementMethodsAndProperties(name, node);

        return element;
    }

    /**
     * Получить элементы блока по имени
     * @name {string}
     */
    elements(name) {
        console.log(name);
    }

    /**
     * Добавить к модификатор к блоку/элементу
     * @name  {string} имя модификатора
     * @value {string} значение модификатора
     */
    addMod(name, value) {
        let modFullName = this.blockCtx.getFullModClassName(this.name, name, value);
        this.classList.add(modFullName);
    }

    /**
     * Удалить модификатор у блока/элемента
     * @name  {string} имя модификатора
     * @value {string} значение модификатора
     */
    removeMod(name, value) {
        let modFullName = this.blockCtx.getFullModClassName(this.name, name, value);
        this.classList.remove(modFullName);
    }

    /**
     * Переключатель модификатора блока.
     * Добавит мод если его нет и удалит в противном случае
     * @name  {string} имя модификатора
     * @value {string} значение модификатора
     */
    toggleMod(name, value) {
        let modFullName = this.blockCtx.getFullModClassName(this.name, name, value);
        this.classList.toggle(modFullName);
    }

    /**
     * Проверка - есть ли у блока модификатор
     * @name   {string}  имя модификатора
     * @value  {string}  значение модификатора
     */
    toggleMod(name, value) {
        let modFullName = this.blockCtx.getFullModClassName(this.name, name, value);
        this.classList.toggle(modFullName);
    }

    /**
     * Проверка - есть ли у блока модификатор
     * @name   {string}  имя модификатора
     * @value  {string}  значение модификатора
     */
    toggleMod(name, value) {
        let modFullName = this.blockCtx.getFullModClassName(this.name, name, value);
        this.classList.toggle(modFullName);
    }

    /**
     * Проверка - есть ли у блока модификатор
     * @name   {string}  имя модификатора
     * @value  {string}  значение модификатора
     */
    toggleMod(name, value = null) {
        let modFullName = this.blockCtx.getFullModClassName(this.name, name, value);
        this.classList.toggle(modFullName);
    }

    /**
     * Проверка - есть ли у блока модификатор
     * @name   {string}  имя модификатора
     * @value  {string}  значение модификатора
     * @return {boolean}
     */
    hasMod(name, value = null) {
        let modFullName = this.blockCtx.getFullModClassName(this.name, name, value);
        return this.classList.contains(modFullName);
    }
}

class MyBlock extends Block {
    constructor() {
        super();
        this.blockName = "form";

        let input = this.element('input');

        input.addMod('mod');
        input.addMod('mod-2');
        input.removeMod('mod-2');
        console.log(input.hasMod('mod-2'));
        input.toggleMod('mod-2');
        console.log(input.hasMod('mod-2'));
        input.toggleMod('mod');
        console.log(input.hasMod('mod'));


        let btn = this.element('btn');
        btn.addMod('mod-name', 'value');
    }
}

let myBlock = new MyBlock;
