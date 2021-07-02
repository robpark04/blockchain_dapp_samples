const config = {
    lendingPoolAddress: "0x65b8F9EC549400275b647667fa8e0864Bd412cA2",
    lendingPoolABI: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_borrowRateMode",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_borrowRate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_originationFee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_borrowBalanceIncrease",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint16",
                    "name": "_referral",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Borrow",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint16",
                    "name": "_referral",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Deposit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_target",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_totalFee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_protocolFee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "FlashLoan",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_collateral",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_purchaseAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_liquidatedCollateralAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_accruedBorrowInterest",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_liquidator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "_receivePToken",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "LiquidationCall",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_collateral",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_feeLiquidated",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_liquidatedCollateralForFee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "OriginationFeeLiquidated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_newStableRate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_borrowBalanceIncrease",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RebalanceStableBorrowRate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RedeemUnderlying",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_repayer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_amountMinusFees",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_fees",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_borrowBalanceIncrease",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Repay",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "ReserveUsedAsCollateralDisabled",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "ReserveUsedAsCollateralEnabled",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_newRateMode",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_newRate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_borrowBalanceIncrease",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Swap",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "LENDINGPOOL_REVISION",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "UINT_MAX_VALUE",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "addressesProvider",
            "outputs": [
                {
                    "internalType": "contract LendingPoolAddressesProvider",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "core",
            "outputs": [
                {
                    "internalType": "contract LendingPoolCore",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "dataProvider",
            "outputs": [
                {
                    "internalType": "contract LendingPoolDataProvider",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "parametersProvider",
            "outputs": [
                {
                    "internalType": "contract LendingPoolParametersProvider",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "contract LendingPoolAddressesProvider",
                    "name": "_addressesProvider",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint16",
                    "name": "_referralCode",
                    "type": "uint16"
                }
            ],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_PTokenBalanceAfterRedeem",
                    "type": "uint256"
                }
            ],
            "name": "redeemUnderlying",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserveToBorrowFrom",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_interestRateMode",
                    "type": "uint256"
                }
            ],
            "name": "calculateUserReserveCollateralETHInvoicePool",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_interestRateMode",
                    "type": "uint256"
                },
                {
                    "internalType": "uint16",
                    "name": "_referralCode",
                    "type": "uint16"
                }
            ],
            "name": "borrow",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address payable",
                    "name": "_onBehalfOf",
                    "type": "address"
                }
            ],
            "name": "repay",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "swapBorrowRateMode",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "rebalanceStableBorrowRate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_useAsCollateral",
                    "type": "bool"
                }
            ],
            "name": "setUserUseReserveAsCollateral",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_collateral",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_purchaseAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_receivePToken",
                    "type": "bool"
                }
            ],
            "name": "liquidationCall",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_params",
                    "type": "bytes"
                }
            ],
            "name": "flashLoan",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "getReserveConfigurationData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "ltv",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidationThreshold",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidationBonus",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "interestRateStrategyAddress",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "usageAsCollateralEnabled",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "borrowingEnabled",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "stableBorrowRateEnabled",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "isActive",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "getReserveData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalLiquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "availableLiquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalBorrowsStable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalBorrowsVariable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "variableBorrowRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "stableBorrowRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "averageStableBorrowRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "utilizationRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "variableBorrowIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "PTokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint40",
                    "name": "lastUpdateTimestamp",
                    "type": "uint40"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserAccountData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalLiquidityETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalCollateralETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalBorrowsETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalFeesETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "availableBorrowsETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "currentLiquidationThreshold",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "ltv",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "healthFactor",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserReserveData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "currentPTokenBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "currentBorrowBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "principalBorrowBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "borrowRateMode",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "borrowRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "originationFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "variableBorrowIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastUpdateTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "usageAsCollateralEnabled",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getReserves",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],

    lendingPoolCoreAddress: "0xB1E4F9f16f72968704DCDcE00EC5848B2074aEdD",
    lendingPoolCoreABI: [
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "reserve",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "liquidityRate",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "stableBorrowRate",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "variableBorrowRate",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "liquidityIndex",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "variableBorrowIndex",
                    type: "uint256",
                },
            ],
            name: "ReserveUpdated",
            type: "event",
        },
        {
            payable: true,
            stateMutability: "payable",
            type: "fallback",
        },
        {
            constant: true,
            inputs: [],
            name: "CORE_REVISION",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "addressesProvider",
            outputs: [
                {
                    internalType: "contract LendingPoolAddressesProvider",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "lendingPoolAddress",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "reservesList",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "contract LendingPoolAddressesProvider",
                    name: "_addressesProvider",
                    type: "address",
                },
            ],
            name: "initialize",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
                {
                    internalType: "bool",
                    name: "_isFirstDeposit",
                    type: "bool",
                },
            ],
            name: "updateStateOnDeposit",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amountRedeemed",
                    type: "uint256",
                },
                {
                    internalType: "bool",
                    name: "_userRedeemedEverything",
                    type: "bool",
                },
            ],
            name: "updateStateOnRedeem",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_availableLiquidityBefore",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_income",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_protocolFee",
                    type: "uint256",
                },
            ],
            name: "updateStateOnFlashLoan",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amountBorrowed",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_borrowFee",
                    type: "uint256",
                },
                {
                    internalType: "enum CoreLibrary.InterestRateMode",
                    name: "_rateMode",
                    type: "uint8",
                },
            ],
            name: "updateStateOnBorrow",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_paybackAmountMinusFees",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_originationFeeRepaid",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_balanceIncrease",
                    type: "uint256",
                },
                {
                    internalType: "bool",
                    name: "_repaidWholeLoan",
                    type: "bool",
                },
            ],
            name: "updateStateOnRepay",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_principalBorrowBalance",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_compoundedBorrowBalance",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_balanceIncrease",
                    type: "uint256",
                },
                {
                    internalType: "enum CoreLibrary.InterestRateMode",
                    name: "_currentRateMode",
                    type: "uint8",
                },
            ],
            name: "updateStateOnSwapRate",
            outputs: [
                {
                    internalType: "enum CoreLibrary.InterestRateMode",
                    name: "",
                    type: "uint8",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_principalReserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_collateralReserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amountToLiquidate",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_collateralToLiquidate",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_feeLiquidated",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_liquidatedCollateralForFee",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_balanceIncrease",
                    type: "uint256",
                },
                {
                    internalType: "bool",
                    name: "_liquidatorReceivesPToken",
                    type: "bool",
                },
            ],
            name: "updateStateOnLiquidation",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_balanceIncrease",
                    type: "uint256",
                },
            ],
            name: "updateStateOnRebalance",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "bool",
                    name: "_useAsCollateral",
                    type: "bool",
                },
            ],
            name: "setUserUseReserveAsCollateral",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address payable",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "transferToUser",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_token",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "_destination",
                    type: "address",
                },
            ],
            name: "transferToFeeCollectionAddress",
            outputs: [],
            payable: true,
            stateMutability: "payable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_token",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "_destination",
                    type: "address",
                },
            ],
            name: "liquidateFee",
            outputs: [],
            payable: true,
            stateMutability: "payable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address payable",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "transferToReserve",
            outputs: [],
            payable: true,
            stateMutability: "payable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getUserBasicReserveData",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "isUserAllowedToBorrowAtStable",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getUserUnderlyingAssetBalance",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveInterestRateStrategyAddress",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReservePTokenAddress",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveAvailableLiquidity",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveTotalLiquidity",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveNormalizedIncome",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveTotalBorrows",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveTotalBorrowsStable",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveTotalBorrowsVariable",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveLiquidationThreshold",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveLiquidationBonus",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveCurrentVariableBorrowRate",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveCurrentStableBorrowRate",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveCurrentAverageStableBorrowRate",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveCurrentLiquidityRate",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveLiquidityCumulativeIndex",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveVariableBorrowsCumulativeIndex",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveConfiguration",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveDecimals",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "isReserveBorrowingEnabled",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "isReserveUsageAsCollateralEnabled",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveIsStableBorrowRateEnabled",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveIsActive",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveIsFreezed",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveLastUpdate",
            outputs: [
                {
                    internalType: "uint40",
                    name: "timestamp",
                    type: "uint40",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getReserveUtilizationRate",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "getReserves",
            outputs: [
                {
                    internalType: "address[]",
                    name: "",
                    type: "address[]",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "isUserUseReserveAsCollateralEnabled",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getUserOriginationFee",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getUserCurrentBorrowRateMode",
            outputs: [
                {
                    internalType: "enum CoreLibrary.InterestRateMode",
                    name: "",
                    type: "uint8",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getUserCurrentStableBorrowRate",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getUserBorrowBalances",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getUserVariableBorrowCumulativeIndex",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getUserLastUpdate",
            outputs: [
                {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [],
            name: "refreshConfiguration",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_PTokenAddress",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_decimals",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "_interestRateStrategyAddress",
                    type: "address",
                },
            ],
            name: "initReserve",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserveToRemove",
                    type: "address",
                },
            ],
            name: "removeLastAddedReserve",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_rateStrategyAddress",
                    type: "address",
                },
            ],
            name: "setReserveInterestRateStrategyAddress",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "bool",
                    name: "_stableBorrowRateEnabled",
                    type: "bool",
                },
            ],
            name: "enableBorrowingOnReserve",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "disableBorrowingOnReserve",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_baseLTVasCollateral",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_liquidationThreshold",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_liquidationBonus",
                    type: "uint256",
                },
            ],
            name: "enableReserveAsCollateral",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "disableReserveAsCollateral",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "enableReserveStableBorrowRate",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "disableReserveStableBorrowRate",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "activateReserve",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "deactivateReserve",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "freezeReserve",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "unfreezeReserve",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_ltv",
                    type: "uint256",
                },
            ],
            name: "setReserveBaseLTVasCollateral",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_threshold",
                    type: "uint256",
                },
            ],
            name: "setReserveLiquidationThreshold",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_bonus",
                    type: "uint256",
                },
            ],
            name: "setReserveLiquidationBonus",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_decimals",
                    type: "uint256",
                },
            ],
            name: "setReserveDecimals",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
    ],

    lendingPoolDataProviderAddress:
        "0xb9DeE95305f48c71284A513aeb02FA79894ca719",
    lendingPoolDataProviderABI: [
        {
            "constant": true,
            "inputs": [],
            "name": "DATA_PROVIDER_REVISION",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "addressesProvider",
            "outputs": [
                {
                    "internalType": "contract LendingPoolAddressesProvider",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "core",
            "outputs": [
                {
                    "internalType": "contract LendingPoolCore",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "contract LendingPoolAddressesProvider",
                    "name": "_addressesProvider",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "calculateUserGlobalData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalLiquidityBalanceETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalCollateralBalanceETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalBorrowBalanceETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalFeesETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "currentLtv",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "currentLiquidationThreshold",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "healthFactor",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "healthFactorBelowThreshold",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "calculateUserReserveCollateralETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalCollateralBalanceETH",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "calculateUserInvoiceCollateralETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalCollateralBalanceETH",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "balanceDecreaseAllowed",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_userCurrentBorrowBalanceTH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_userCurrentFeesETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_userCurrentLtv",
                    "type": "uint256"
                }
            ],
            "name": "calculateCollateralNeededInETH",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getHealthFactorLiquidationThreshold",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "getReserveConfigurationData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "ltv",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidationThreshold",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidationBonus",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "rateStrategyAddress",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "usageAsCollateralEnabled",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "borrowingEnabled",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "stableBorrowRateEnabled",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "isActive",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "getReserveData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalLiquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "availableLiquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalBorrowsStable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalBorrowsVariable",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "variableBorrowRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "stableBorrowRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "averageStableBorrowRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "utilizationRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "variableBorrowIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "PTokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint40",
                    "name": "lastUpdateTimestamp",
                    "type": "uint40"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserAccountData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalLiquidityETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalCollateralETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalBorrowsETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalFeesETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "availableBorrowsETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "currentLiquidationThreshold",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "ltv",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "healthFactor",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserReserveData",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "currentPTokenBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "currentBorrowBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "principalBorrowBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "borrowRateMode",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "borrowRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "originationFee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "variableBorrowIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastUpdateTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "usageAsCollateralEnabled",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],

    erc20ABI: [
        {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [
                {
                    name: "",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_spender",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "approve",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_from",
                    type: "address",
                },
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "transferFrom",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [
                {
                    name: "",
                    type: "uint8",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address",
                },
            ],
            name: "balanceOf",
            outputs: [
                {
                    name: "balance",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [
                {
                    name: "",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    name: "_to",
                    type: "address",
                },
                {
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "transfer",
            outputs: [
                {
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    name: "_owner",
                    type: "address",
                },
                {
                    name: "_spender",
                    type: "address",
                },
            ],
            name: "allowance",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            payable: true,
            stateMutability: "payable",
            type: "fallback",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "owner",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "spender",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Approval",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    name: "from",
                    type: "address",
                },
                {
                    indexed: true,
                    name: "to",
                    type: "address",
                },
                {
                    indexed: false,
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Transfer",
            type: "event",
        },
    ],

    rewardAddress: "0xbd1eB2b00568e6E37547F77821b1A048A8582Cf9",
    rewardABI: [
        {
            inputs: [
                {
                    internalType: "contract LendingPoolCore",
                    name: "_core",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_rewardToken",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_devaddr",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_rewardTokenPerBlock",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_startBlock",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_bonusEndBlock",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "Deposit",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "EmergencyWithdraw",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "Withdraw",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "Withdrawrawrewardtoken",
            type: "event",
        },
        {
            constant: true,
            inputs: [],
            name: "BONUS_MULTIPLIER",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "bonusEndBlock",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "core",
            outputs: [
                {
                    internalType: "contract LendingPoolCore",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "devaddr",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "isOwner",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "migrator",
            outputs: [
                {
                    internalType: "contract IMigratorToken",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "rewardToken",
            outputs: [
                {
                    internalType: "contract IERC20",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "rewardTokenPerBlock",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "startBlock",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "totalAllocPoint",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "contract LendingPoolCore",
                    name: "_lendingPoolCore",
                    type: "address",
                },
            ],
            name: "UpdatelendingPoolCore",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "uint256",
                    name: "_allocPoint",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "add",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_allocPoint",
                    type: "uint256",
                },
            ],
            name: "set",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "contract IMigratorToken",
                    name: "_migrator",
                    type: "address",
                },
            ],
            name: "setMigrator",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "migrate",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "uint256",
                    name: "_from",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_to",
                    type: "uint256",
                },
            ],
            name: "getMultiplier",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "pendingrewardToken",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "getpoolinfo",
            outputs: [
                {
                    internalType: "contract IERC20",
                    name: "",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getuserinfo",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "updatePool",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "deposit",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "withdraw",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "withdrawrewardtoken",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_reserve",
                    type: "address",
                },
            ],
            name: "emergencyWithdraw",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_devaddr",
                    type: "address",
                },
            ],
            name: "dev",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
    ],

    pTokenABI: [
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Approval",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "_from",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "_to",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_value",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_fromBalanceIncrease",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_toBalanceIncrease",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_fromIndex",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_toIndex",
                    type: "uint256",
                },
            ],
            name: "BalanceTransfer",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "_from",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_value",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_fromBalanceIncrease",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_fromIndex",
                    type: "uint256",
                },
            ],
            name: "BurnOnLiquidation",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "_from",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "_to",
                    type: "address",
                },
            ],
            name: "InterestRedirectionAllowanceChanged",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "_from",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "_to",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_redirectedBalance",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_fromBalanceIncrease",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_fromIndex",
                    type: "uint256",
                },
            ],
            name: "InterestStreamRedirected",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "_from",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_value",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_fromBalanceIncrease",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_fromIndex",
                    type: "uint256",
                },
            ],
            name: "MintOnDeposit",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "_from",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_value",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_fromBalanceIncrease",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_fromIndex",
                    type: "uint256",
                },
            ],
            name: "Redeem",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "_targetAddress",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_targetBalanceIncrease",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_targetIndex",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_redirectedBalanceAdded",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "_redirectedBalanceRemoved",
                    type: "uint256",
                },
            ],
            name: "RedirectedBalanceUpdated",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "from",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Transfer",
            type: "event",
        },
        {
            constant: true,
            inputs: [],
            name: "UINT_MAX_VALUE",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
            ],
            name: "allowance",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "approve",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [
                {
                    internalType: "uint8",
                    name: "",
                    type: "uint8",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "subtractedValue",
                    type: "uint256",
                },
            ],
            name: "decreaseAllowance",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "addedValue",
                    type: "uint256",
                },
            ],
            name: "increaseAllowance",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "transfer",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "sender",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "recipient",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "transferFrom",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "underlyingAssetAddress",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_to",
                    type: "address",
                },
            ],
            name: "redirectInterestStream",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_from",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_to",
                    type: "address",
                },
            ],
            name: "redirectInterestStreamOf",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_to",
                    type: "address",
                },
            ],
            name: "allowInterestRedirectionTo",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "redeem",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_account",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "mintOnDeposit",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_account",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "burnOnLiquidation",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_from",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_value",
                    type: "uint256",
                },
            ],
            name: "transferOnLiquidation",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "balanceOf",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "principalBalanceOf",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "isTransferAllowed",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getUserIndex",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getInterestRedirectionAddress",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getRedirectedBalance",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
    ],

    chainlinkProxyPriceProviderAddress:
        "0xA26BBe6700484bF5e3dcC5A9E0d5c484c2bBffD4",
    chainlinkProxyPriceProviderABI: [
        {
            inputs: [
                {
                    internalType: "address[]",
                    name: "_assets",
                    type: "address[]",
                },
                {
                    internalType: "address[]",
                    name: "_sources",
                    type: "address[]",
                },
                {
                    internalType: "address",
                    name: "_fallbackOracle",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "asset",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "source",
                    type: "address",
                },
            ],
            name: "AssetSourceUpdated",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "fallbackOracle",
                    type: "address",
                },
            ],
            name: "FallbackOracleUpdated",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            constant: true,
            inputs: [],
            name: "isOwner",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address[]",
                    name: "_assets",
                    type: "address[]",
                },
                {
                    internalType: "address[]",
                    name: "_sources",
                    type: "address[]",
                },
            ],
            name: "setAssetSources",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_fallbackOracle",
                    type: "address",
                },
            ],
            name: "setFallbackOracle",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_asset",
                    type: "address",
                },
            ],
            name: "getAssetPrice",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address[]",
                    name: "_assets",
                    type: "address[]",
                },
            ],
            name: "getAssetsPrices",
            outputs: [
                {
                    internalType: "uint256[]",
                    name: "",
                    type: "uint256[]",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_asset",
                    type: "address",
                },
            ],
            name: "getSourceOfAsset",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "getFallbackOracle",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
    ],

    feeProviderAddress: "0x51c994d2D17BdA4166b1Ea37045b1CbC56EB04Be",
    feeProviderABI: [
        {
            constant: true,
            inputs: [],
            name: "FEE_PROVIDER_REVISION",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "originationFeePercentage",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                {
                    internalType: "address",
                    name: "_addressesProvider",
                    type: "address",
                },
            ],
            name: "initialize",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "calculateLoanOriginationFee",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "getLoanOriginationFeePercentage",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
    ],

    testFaucetAddress: "0x8180570bbccFa65F4Fa60A8DDf3A71bB9365864a",
    testFaucetABI: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isOwner",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "symbol",
                    "type": "bytes32"
                }
            ],
            "name": "getAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "symbol",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "setTokenAddress",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "setMaxAmount",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_tokenAddress",
                    "type": "address"
                }
            ],
            "name": "mint",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],

    lendingPoolConfiguratorAddress: "0x5410fa325E652d5B186884C09606c173e3C69aAb",
    lendingPoolConfiguratorABI: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "BorrowingDisabledOnReserve",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "_stableRateEnabled",
                    "type": "bool"
                }
            ],
            "name": "BorrowingEnabledOnReserve",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "ReserveActivated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_ltv",
                    "type": "uint256"
                }
            ],
            "name": "ReserveBaseLtvChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "ReserveDeactivated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_decimals",
                    "type": "uint256"
                }
            ],
            "name": "ReserveDecimalsChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "ReserveDisabledAsCollateral",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_ltv",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_liquidationThreshold",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_liquidationBonus",
                    "type": "uint256"
                }
            ],
            "name": "ReserveEnabledAsCollateral",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "ReserveFreezed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_PToken",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_interestRateStrategyAddress",
                    "type": "address"
                }
            ],
            "name": "ReserveInitialized",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_strategy",
                    "type": "address"
                }
            ],
            "name": "ReserveInterestRateStrategyChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_bonus",
                    "type": "uint256"
                }
            ],
            "name": "ReserveLiquidationBonusChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_threshold",
                    "type": "uint256"
                }
            ],
            "name": "ReserveLiquidationThresholdChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "ReserveRemoved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "ReserveUnfreezed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "StableRateDisabledOnReserve",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "StableRateEnabledOnReserve",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "CONFIGURATOR_REVISION",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "invoiceCollateralReserveMap",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "invoiceCollateralReservesList",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isInvoiceCollateralReserve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isInvoiceReserve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "poolAddressesProvider",
            "outputs": [
                {
                    "internalType": "contract LendingPoolAddressesProvider",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "contract LendingPoolAddressesProvider",
                    "name": "_poolAddressesProvider",
                    "type": "address"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getInvoiceCollateralReserves",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "getCollateralTokenAddressStatus",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "symbol",
                    "type": "bytes32"
                }
            ],
            "name": "getCollateralTokenAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "disableCollateralTokenAddress",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "symbol",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "setTokenAddress",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "isReserveEnabledForInvoicePool",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_enable",
                    "type": "bool"
                }
            ],
            "name": "enableReserveForInvoicePool",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "_underlyingAssetDecimals",
                    "type": "uint8"
                },
                {
                    "internalType": "address",
                    "name": "_interestRateStrategyAddress",
                    "type": "address"
                }
            ],
            "name": "initReserve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_PTokenName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_PTokenSymbol",
                    "type": "string"
                },
                {
                    "internalType": "uint8",
                    "name": "_underlyingAssetDecimals",
                    "type": "uint8"
                },
                {
                    "internalType": "address",
                    "name": "_interestRateStrategyAddress",
                    "type": "address"
                }
            ],
            "name": "initReserveWithData",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserveToRemove",
                    "type": "address"
                }
            ],
            "name": "removeLastAddedReserve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "_stableBorrowRateEnabled",
                    "type": "bool"
                }
            ],
            "name": "enableBorrowingOnReserve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "disableBorrowingOnReserve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_baseLTVasCollateral",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidationThreshold",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_liquidationBonus",
                    "type": "uint256"
                }
            ],
            "name": "enableReserveAsCollateral",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "disableReserveAsCollateral",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "enableReserveStableBorrowRate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "disableReserveStableBorrowRate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "activateReserve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "deactivateReserve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "freezeReserve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                }
            ],
            "name": "unfreezeReserve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_ltv",
                    "type": "uint256"
                }
            ],
            "name": "setReserveBaseLTVasCollateral",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_threshold",
                    "type": "uint256"
                }
            ],
            "name": "setReserveLiquidationThreshold",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_bonus",
                    "type": "uint256"
                }
            ],
            "name": "setReserveLiquidationBonus",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_decimals",
                    "type": "uint256"
                }
            ],
            "name": "setReserveDecimals",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_reserve",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_rateStrategyAddress",
                    "type": "address"
                }
            ],
            "name": "setReserveInterestRateStrategyAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "refreshLendingPoolCoreConfiguration",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],

};

export default config;
