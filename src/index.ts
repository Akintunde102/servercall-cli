#! /usr/bin/env node

import { Command } from 'commander';
import { red , underline} from "colorette"
import { generateServerStore } from "./generate-server-store";

const program = new Command();

const main = async () => {
    program
        .name('servercall-cli')
        .description('CLI to generate server store from Open API Docs')
        .version('1.0.0');

    program
        .command('generate')
        .description('Generate Server Store')
        .option('-a, --api-doc <url>', 'url of your open api docs')
        .option('-s, --store-path <path>', 'where you want the store to be generated in your project')
        .action((options) => {
            return generateServerStore(options.apiDoc, options.storePath);
        });

    if (program.args.length < 2) {
        program.showHelpAfterError('You must provide a command');
    }
    try {
        await program.parseAsync();

    } catch (error) {
        console.log(red(underline(error as string)) + '\n');
        program.help();
    }
}

main();