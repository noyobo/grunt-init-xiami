/*
 * grunt-init-xiami
 * https://gruntjs.com/
 *
 * Copyright (c) 2014 NOYOBO
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = ' 创建虾米构建模版';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = '依赖 _npm & _grunt, 如果你已安装, 运行 \nnpm i 安装node包依赖\n' +
    'grunt 构建项目 \n' +
    '\n' +
    'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({}, [
        // Prompt for these values.
        init.prompt('name'),
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('author_url'),
        init.prompt('node_version'),
    ], function(err, props) {
        //props.keywords = [];
        props.devDependencies = {
            'grunt-contrib-clean': '~0.4.0',
            'grunt-contrib-uglify': '~0.2.0',
            'grunt-contrib-cssmin': '~0.4.1',
            'grunt-contrib-copy': '~0.4.1'
        };

        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Add properly-named license files.
        //init.addLicenseFiles(files, props.licenses);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // Generate package.json file.
        init.writePackageJSON('package.json', props);

        // All done!
        done();
    });

};
