<?php

use WpkColoco\Wepika\Curl\Exception\CurlErrorException;
use WpkColoco\Wepika\OrkardApi\Exception\OrkardApiErrorException;
use WpkColoco\Model\ColocoCustomer;

class WpkColocoTicketsModuleFrontController extends ModuleFrontController
{
    public $php_name = 'tickets';

    public function init()
    {
        if (!$this->context->customer->isLogged() || is_null(ColocoCustomer::getByIdCustomer($this->context->customer->id))) {
            Tools::redirect(__PS_BASE_URI__);
        }
        $this->context = Context::getContext();
        parent::init(); // TODO: Change the autogenerated stub


    }

    public function initContent()
    {
        parent::initContent();

        /* @var \WpkColoco $module */
        $module = $this->module;

        try {
            $colocoCustomer = ColocoCustomer::getByIdCustomer($this->context->customer->id);

            $tickets = $module->getColocoApiHandler()->getJSONCustomerTickets($colocoCustomer->idcli);
            $tickets = $this->reformatTickets($tickets['data']);
            $this->context->smarty->assign(array(
                "module_template_path" => __DIR__ . '/../../views/templates/front/',
                "tickets" => $tickets,
            ));

            $this->setTemplate('module:wpkcoloco/views/templates/front/tickets.tpl');


        } catch (Exception $e) {
            echo '<pre>';
            var_dump($e->getMessage());
            exit;
        }

    }

    private function reformatDate($apiDate)
    {
        $date = explode(' ', $apiDate);
        $date = explode('-', $date[0]);

        return $date[2] . '-' . $date[1] . '-' . $date[0];
    }

    private function reformatTickets($tickets)
    {

        foreach ($tickets as $ticket) {
            $shop = $this->getShopByIDM($ticket['idm']);
            $result['idt'] = $ticket['idt'];
            $result['dttrs'] = $this->reformatDate($ticket['dttrs']);
            $result['ca'] = $ticket['ca'];
            $result['idm'] = $shop !== '' ? $shop : $this->trans('Shop not found', array(), 'Modules.Wpkcoloco.Tickets');
            $result['depense'] = !is_null($ticket['depense']) ? $ticket['depense'] : 0;

            if (is_null($ticket['receipt']['jtkt'])) {
                $result['receipt']['jtkt'] = null;
            } else {
                $result['receipt']['jtkt'] = str_replace('\n', '<br />', $ticket['receipt']['jtkt']);
                $result['receipt']['jtkt'] = str_replace('"', '', $result['receipt']['jtkt']);
            }

            $new_tickets[] = $result;
        }

        return $new_tickets;

    }

    private function getShopByIDM($idm)
    {

        if ($idm && $idm != '0') {
            $sql = "SELECT city
                FROM " . _DB_PREFIX_ . "store
                WHERE email like '" . psql($idm) . "@%'
                ";

            $result = Db::getInstance()->getValue($sql);
        } else {
            $result = $this->trans('Shop not found', array(), 'Modules.Wpkcoloco.Tickets');
        }

        return $result;
    }

    public function getBreadcrumbLinks()
    {
        $breadcrumb = parent::getBreadcrumbLinks();
        $breadcrumb['links'][] = $this->addMyAccountToBreadcrumb();
        $breadcrumb['links'][] = [
            'title' => $this->trans('Your tickets', array(), 'Modules.Wpkcoloco.Loyaltycard'),
            'url' => $this->context->link->getModuleLink('wpkcoloco', 'Tickets')
        ];

        return $breadcrumb;
    }
}
