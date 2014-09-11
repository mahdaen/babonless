module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            build: {
                files: {
                    'dist/babonless-0.0.1.less': [
                        'src/mixins/_vars.less',

                        'src/mixins/_common.less',
                        'src/mixins/_css3.less',

                        'src/mixins/_animation.less',
                        'src/mixins/_border.less',
                        'src/mixins/_cheats.less',
                        'src/mixins/_display.less',
                        'src/mixins/_fonts.less',
                        'src/mixins/_gradients.less',
                        'src/mixins/_grids.less',
                        'src/mixins/_position.less',
                        'src/mixins/_shadow.less',
                        'src/mixins/_shape.less',
                        'src/mixins/_transform.less',

                        'src/mixins/_normalize.less'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
}