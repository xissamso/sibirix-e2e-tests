import {Test_form} from "../locators/test_form";

describe('Test-form_sibirix', () => {
    const test_form = new Test_form();

    it('1 Отправка полностью заполненной формы с валидными данными', async () => {
        await browser.url(`/`);

        await test_form.inputName.addValue("Test 1");
        await test_form.inputEmail.addValue("test@test.ru");
        await test_form.inputPhone.addValue("79991000000");
        await test_form.inputTextArea.addValue("Тест");
        await test_form.submitButton.click();

        await expect(test_form.formMessage).toHaveText("Сообщение успешно отправлено!");
    });

    it('2 Отправка полностью заполненной формы с валидными данными и прикреплением файла (doc, jpg, pdf, макс. 1Мб)', async () => {
        await browser.url(`/`);

        const filePath = 'test/test_files/file1.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);

        await test_form.inputName.addValue("test");
        await test_form.inputEmail.addValue("test@test.ru");
        await test_form.inputPhone.addValue("79991000000");
        await test_form.inputTextArea.addValue("test");
        await test_form.fileInput.addValue(remoteFilePath);
        await test_form.submitButton.click();

        await expect(test_form.formMessage).toHaveText("Сообщение успешно отправлено!");
    });

    it('3 Отправка формы без заполнения обязательных полей', async () => {
        await browser.url(`/`);

        await test_form.submitButton.click();

        await expect(test_form.errorMsg(1)).toHaveText("Заполните поле");
        await expect(test_form.errorMsg(2)).toHaveText("Заполните поле");
        await expect(test_form.errorMsg(3)).toHaveText("Заполните поле");
        await expect(test_form.errorMsg(4)).toHaveText("Запонлите поле");

    });

});

