import {Test_form} from "../locators/test_form";

describe('Test-form_sibirix', () => {
    const test_form = new Test_form();

    it('Отправка полностью заполненной формы с валидными данными', async () => {
        await browser.url(`/`);

        await test_form.inputName.addValue("test");
        await test_form.inputEmail.addValue("test@test.ru");
        await test_form.inputPhone.addValue("79991000000");
        await test_form.inputTextArea.addValue("test");
        await test_form.submitButton.click();

        await expect(test_form.formMessage).toHaveText("Сообщение успешно отправлено!");
    });
});

