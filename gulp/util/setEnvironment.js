/* setEnvironment
 * ------------
 * Set environment if it not defined
 */

import gulpEnvironments     from 'gulp-environments';

global.environments = gulpEnvironments;

export default function() {

    global.production = environments.production;
    global.development = environments.development;

};