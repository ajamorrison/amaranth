export default function log(msg: string, type: string, level?: number) {

    switch (type) {
        case "process": {
            process.stdout.write("\x1b[36m> " + type.toUpperCase() + ":\x1b[0m " + msg + "\n");
            break;
        }
        case "server": {
            process.stdout.write("\x1b[31m> " + type.toUpperCase() + ":\x1b[0m " + msg + "\n");
            break;
        }
        case "db": {
            process.stdout.write("\x1b[35m> " + type.toUpperCase() + ":\x1b[0m " + msg + "\n");
            break;
        }
        case "ssr": {
            process.stdout.write("\x1b[32m> " + type.toUpperCase() + ":\x1b[0m " + msg + "\n");
            break;
        }
        default: {
            process.stdout.write("> " + type.toUpperCase() + ": " + msg + "\n");
        }
    }
}
