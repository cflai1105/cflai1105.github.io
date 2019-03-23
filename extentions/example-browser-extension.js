var BrowserExtension = function () {
};

BrowserExtension.prototype.getInfo = function () {
    return {
        id: 'browser',
        name: 'Browser Information',

        blocks: [
            {
                opcode: 'getBrowserName',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Get Browser Name',
            }
        ],

        translation_map: {
            zh: {
                'extensionName': '瀏覽器資訊',
                'getBrowserName': '取得瀏覽器名稱'
            }
        },
    };
};

BrowserExtension.prototype.getBrowserName = function (args) {
    return navigator.appVersion;
};

Scratch.extensions.register(new BrowserExtension());