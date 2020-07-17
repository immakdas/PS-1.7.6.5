module.exports = {
  accountPage: {
    create_button: '[data-link-action="display-register-form"]',
    firstname_input: '//*[@id="customer-form"]//input[@name="firstname"]',
    lastname_input: '//*[@id="customer-form"]//input[@name="lastname"]',
    email_input: '//*[@id="customer-form"]//input[@name="email"]',
    password_input: '[name="password"]',
    birthday_input: '[name="birthday"]',
    checkout_step: '//*[@id="checkout-personal-information-step"]/h1',
    checkout_step_complete: '#checkout-personal-information-step.-complete',
    checkout_step_identity: '#checkout-personal-information-step .identity',
    alert_danger_email: '//*[@id="customer-form"]//li[@class="alert alert-danger"]',
    continue_shopping: '//*[@id="main"]//div[contains(@class,"cart-grid")]//a',
    customer_form_continue_button: '//*[@id="customer-form"]//button[@name="continue"]',
    save_account_button: '[data-link-action="save-customer"]',
    gender_radio_button: '(//*[@id="customer-form"]//input[contains(@name,"id_gender")])[2]',
    psgdpr_button: 'input[type="checkbox"][name="psgdpr"]',
    psgdpr_label: 'span[@class="custom-checkbox"]//label',
    account_link: '//*[@id="_desktop_user_info"]//a[@class="account"]',
    add_first_address: '#address-link',
    adr_address: '//*[@id="content"]//input[@name="address1"]',
    adr_postcode: '//*[@id="content"]//input[@name="postcode"]',
    adr_city: '//*[@id="content"]//input[@name="city"]',
    adr_save: '//*[@id="content"]//footer/button',
    success_alert: '[data-alert="success"]',
    adr_update: '[data-link-action="edit-address"]',
    name_firstname_link: '//*[@id="_desktop_user_info"]//a[@class="account"]',
    selected_country_option_list: '//*[@name="id_country"]//option[@selected and (text()="%D")]',
    selected_default_country_option_list: '//*[@name="id_country"]//option[@selected and not(@disabled)]',
    //------------------ connect with existing account from checkout ----------------//
    sign_tab: '//*[@id="checkout-personal-information-step"]//a[contains(text(), "Sign in")]',
    signin_email_input: '//*[@id="login-form"]//input[@name="email"]',
    signin_password_input: '//*[@id="login-form"]//input[@name="password"]',
    continue_button: '//*[@id="login-form"]//button[contains(@class, "continue")]',
    //---------------------- create account from checkout -------------------------//
    new_customer_btn: '[data-link-action="register-new-customer"]',
    new_address_btn: '[name="confirm-addresses"]',
    new_email_input: '//*[@id="customer-form"]//input[@name="email"]',
    password_account_input: '//*[@id="customer-form"]//input[@name="password"]',
    new_password_input: '//*[@id="customer-form"]//input[@name="new_password"]',
    customer_form: '//*[@id="customer-form"]',
    shipping_continue_btn: '//*[@id="js-delivery"]/button[@name="confirmDeliveryOption"]',
    pay_by_check: '//*[@id="payment-option-1"]',
    terms_of_service: '//*[@id="conditions_to_approve[terms-and-conditions]"]',
    order_button: '//*[@id="payment-confirmation"]//button',
    confirmed_order_message: '//*[@id="content-hook_order_confirmation"]//h3[contains(@class, "card-title")]',
    email_sent_message: '//*[@id="content-hook_order_confirmation"]//p',
    save_notification: '//*[@id="notifications"]//li',
    danger_alert: '//*[@id="customer-form"]//li[contains(@class,"alert-danger")]',
    add_new_address: '//*[@id="checkout-addresses-step"]//p[@class="add-address"]/a',
    //---------------------- address management -------------------------//
    address_firstname_input: '//*[@class="js-address-form"]//input[@name="firstname"]',
    address_lastname_input: '//*[@class="js-address-form"]//input[@name="lastname"]',
    delete_address_button: '(//*[@id="main"]//article[@class="address"])[1]//a[@data-link-action="delete-address"]',
    address_block: 'article.address',
    create_new_address_button: '//*[@id="content"]//a[@data-link-action="add-address"]',
    country_list: '//*[@id="content"]//select[@name="id_country"]',
    country_option: '//*[@id="content"]//select[@name="id_country"]//option[text()="%B"]',
    last_name_input: '//*[@id="content"]//input[@name="lastname"]',
    first_name_input: '//*[@id="content"]//input[@name="firstname"]',
    address1_input: '//*[@id="content"]//input[@name="address1"]',
    address2_input: '//*[@id="content"]//input[@name="address2"]',
    dni_input: '//*[@id="content"]//input[@name="dni"]',
    poste_code_input: '//*[@id="content"]//input[@name="postcode"]',
    city_input: '//*[@id="content"]//input[@name="city"]',
    phone_input: '//*[@id="content"]//input[@name="phone"]',
    date_birthday_input: '//*[@id="content"]//input[@name="birthday"]',
    personal_information_tab: '//*[@id="checkout-personal-information-step"]/h1',
    address_country_list: '//*[@id="content"]//select[@name="id_country"]',
  }
};
