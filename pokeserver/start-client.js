const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'pokindex', shell: true };
require('child_process').spawn('npm', args, opts);