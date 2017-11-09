module.exports = function (grunt) {

    //  let platform = grunt.option('platform');
    // require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        protractor_webdriver: {
            options: {
                path: 'node_modules/protractor/bin/',
                keepAlive: true
            },
            update: {
                options: {
                    command: 'webdriver-manager update'
                }
            },
            start: {
                options: {
                    command: 'webdriver-manager start'
                }
            }
        },

        protractor: {
            options: {
                keepAlive: true,
                noColor: false
            },
            dev: {

                options: {
                    configFile: 'test/conf_protractor.js',
                    args: {
                        seleniumAddress: 'http://localhost:4444/wd/hub',
                        baseUrl: 'http://foodbank.d5.aisnovations.com/',
                        // cucumberOpts: {
                        //     tags: ['~@ignore', '<%= protractor.platformTag%>']
                        // }
                    }
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    //
    // grunt.loadNpmTasks('grunt-protractor-cucumber-html-report');

    grunt.registerTask('e2e', function (target) {
        process.env.PLATFORM = grunt.option('platform') || 'desktop';
      //  process.env.BROWSER = grunt.option('browser') || 'chrome';
        //process.env.FEATURE = grunt.option('feature') || 'FeatureOne';
        target = target || 'dev';
        grunt.task.run(['protractor_webdriver:start', 'protractor:' + target]);
    })
        // platformTag = '@' + process.env.PLATFORM;
        // grunt.log.writeflags(platformTag, 'protractor');
        // grunt.config.set('protractor.platformTag', platformTag);

        // featureTag = '@' + process.env.FEATURE;
        // grunt.log.writeflags(featureTag, 'protractor');
        // grunt.config.set('protractor.featureTag', featureTag);


        /*function setTag(tag, propertyName) {
            let tagValue = '@' + process.env[propertyName];
            grunt.log.writeflags(tagValue, 'protractor');
            grunt.config.set('protractor.'+tag, tagValue);
        }
        setTag("platformTag", "PLATFORM" );
        setTag("featureTag", "FEATURE" );
       */


};