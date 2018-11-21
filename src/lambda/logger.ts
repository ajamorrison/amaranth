export default function log(msg: string, type: string) {
    process.stdout.write("> " + type.toUpperCase() + " : " + msg + "\n");
}
