export class Test_form {
    private _root: string="//*[@class = 'block-wrapper request']";

    get inputName () {
        return $(this._root + "/descendant::*[@class = 'required'][1]")
    }

    get inputEmail () {
        return $(this._root + "/descendant::*[@class = 'required is-email']")
    }

    get inputPhone () {
        return $(this._root + "/descendant::*[@class = 'required'][2]")
    }

    get inputTextArea () {
        return $(this._root + "/descendant::*[@name= 'message']")
    }

    get submitButton () {
        return $(this._root + "/descendant::*[@type= 'submit']")
    }
    //*[@class = 'form-wrapper']
    get formMessage () {
        return $(this._root + "/descendant::*[@class='form-wrapper']")
    }

}
