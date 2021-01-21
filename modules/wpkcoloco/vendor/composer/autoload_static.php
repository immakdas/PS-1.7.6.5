<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitba3894a3442b49abd5621c3b4ba331e6
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WpkColoco\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WpkColoco\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'WpkColoco\\Model\\AwaitingVerificationCustomer' => __DIR__ . '/../..' . '/src/Model/AwaitingVerificationCustomer.php',
        'WpkColoco\\Model\\ColocoCustomer' => __DIR__ . '/../..' . '/src/Model/ColocoCustomer.php',
        'WpkColoco\\Model\\PostAjaxLoginApplication' => __DIR__ . '/../..' . '/src/Model/PostAjaxLoginApplication.php',
        'WpkColoco\\Service\\AccountVerificationKeyService' => __DIR__ . '/../..' . '/src/Service/ColocoCustomer/AccountVerificationKeyService.php',
        'WpkColoco\\Service\\ColocoCustomer\\ColocoCustomerHydrationService' => __DIR__ . '/../..' . '/src/Service/ColocoCustomer/ColocoCustomerHydrationService.php',
        'WpkColoco\\Service\\EncryptionService' => __DIR__ . '/../..' . '/src/Service/Encryption/EncryptionService.php',
        'WpkColoco\\Wepika\\Curl\\CurlManager' => __DIR__ . '/../..' . '/src/Wepika/Curl/CurlManager.php',
        'WpkColoco\\Wepika\\Curl\\CurlOption' => __DIR__ . '/../..' . '/src/Wepika/Curl/CurlOption.php',
        'WpkColoco\\Wepika\\Curl\\CurlOptionList' => __DIR__ . '/../..' . '/src/Wepika/Curl/CurlOptionList.php',
        'WpkColoco\\Wepika\\Curl\\Exception\\CurlErrorException' => __DIR__ . '/../..' . '/src/Wepika/Curl/Exception/CurlErrorException.php',
        'WpkColoco\\Wepika\\Formatter\\AddressFormatter' => __DIR__ . '/../..' . '/src/Wepika/Formatter/AddressFormatter.php',
        'WpkColoco\\Wepika\\Log\\Logger' => __DIR__ . '/../..' . '/src/Wepika/Log/Logger.php',
        'WpkColoco\\Wepika\\OrkardApi\\Entity\\OrkardCustomer' => __DIR__ . '/../..' . '/src/Wepika/OrkardApi/Entity/OrkardCustomer.php',
        'WpkColoco\\Wepika\\OrkardApi\\Exception\\OrkardApiErrorException' => __DIR__ . '/../..' . '/src/Wepika/OrkardApi/Exception/OrkardApiErrorException.php',
        'WpkColoco\\Wepika\\OrkardApi\\OrkardApiCredential' => __DIR__ . '/../..' . '/src/Wepika/OrkardApi/OrkardApiCredential.php',
        'WpkColoco\\Wepika\\OrkardApi\\OrkardApiHandler' => __DIR__ . '/../..' . '/src/Wepika/OrkardApi/OrkardApiHandler.php',
        'WpkColoco\\Wepika\\Repository\\AbstractRepository' => __DIR__ . '/../..' . '/src/Wepika/Repository/AbstractRepository.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitba3894a3442b49abd5621c3b4ba331e6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitba3894a3442b49abd5621c3b4ba331e6::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitba3894a3442b49abd5621c3b4ba331e6::$classMap;

        }, null, ClassLoader::class);
    }
}
