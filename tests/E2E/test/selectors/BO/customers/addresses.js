module.exports = {
  Addresses: {
    addresses_menu: '//*[@id="subtab-AdminAddresses"]/a',
    new_address_button: '//*[@id="page-header-desc-address-new_address"]',
    email_input: '//*[@id="email"]',
    id_number_input: '//*[@id="dni"]',
    address_alias_input: '//*[@id="alias"]',
    first_name_input: '//*[@id="firstname"]',
    last_name_input: '//*[@id="lastname"]',
    company: '//*[@id="company"]',
    VAT_number_input: '//*[@id="vat_number"]',
    address_input: '//*[@id="address1"]',
    address_second_input: '//*[@id="address2"]',
    zip_code_input: '//*[@id="postcode"]',
    city_input: '//*[@id="city"]',
    country_input: '//*[@id="id_country"]',
    phone_input: '//*[@id="phone"]',
    other_input: '//*[@id="other"]',
    save_button: '//*[@id="address_form_submit_btn"]',
    filter_by_address_input: '//*[@id="form-address"]//input[@name="addressFilter_address1"]',
    address_value: '//*[@id="form-address"]//td[%ID]',
    edit_button: '//*[@id="table-address"]//a[@title="Edit"]',
    dropdown_toggle: '//*[@id="table-address"]//button[@data-toggle="dropdown"]',
    delete_button: '//*[@id="table-address"]//a[@title="Delete"]',
    select_address: '//*[@id="table-address"]//input[@name="addressBox[]"]',
    bulk_actions_button: '//*[@id="bulk_action_menu_address"]',
    bulk_actions_delete_button: '//div[contains(@class,"bulk-actions")]//a[contains(@onclick,"submitBulkdeleteaddress")]',
    required_fields_button: '//a[contains(@onclick,"requiredFieldsParameters")]',
    company_field_input: '//input[contains(@name,"fieldsBox[]")]',
    submit_field: '//button[contains(@name,"submitFields")]',
    select_all_field_name: '//input[contains(@name,"checkme")]',
    address_id: '//*[@id="table-address"]//td[2]',
    empty_class: '//*[@id="table-address"]//div[contains(@class,"list-empty-msg")]',
    first_name_value: '//*[@id="table-address"]//tr[%ID]/td[3]',
    last_name_value: '//*[@id="table-address"]//tr[%ID]/td[4]',
    zip_code_value: '//*[@id="table-address"]//tr[%ID]/td[6]',
    city_value: '//*[@id="table-address"]//tr[%ID]/td[7]',
    country_value: '//*[@id="table-address"]//tr[%ID]/td[8]'
  }
};