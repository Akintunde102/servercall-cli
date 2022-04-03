import * as fs from 'fs';
import * as prettier from 'prettier';
import { convertOpenAPiToServerCallStore } from "./convert-open-api-to-server-call"
import { logger } from './logger';


/**
 * Get  Store Content
 * @param keyType 
 * @param serverStore 
 * @returns 
 */
const content = (keyType: any, serverStore: any) => `
import { ServerCallVerbs, ServerCallsType } from 'servercall';

export type ServerCallsKeyType = ${keyType};

export const serverCalls: ServerCallsType<ServerCallsKeyType> = ${serverStore};
`

/**
 * Generate Server Store from Open API Docs 
 * @param apiDoc 
 * @param storePath 
 */
export const generateServerStore = async (apiDoc: string, storePath: any) => {
    logger.log("Generating with args: ", { apiDoc, storePath });

    if (storePath.split(".").pop() !== "ts") {
        throw new Error("storePath must be a .ts file");
    };

    const { store: serverStore, keyType } = await convertOpenAPiToServerCallStore(apiDoc);
    const fileLocation = storePath;
    const prettyContent = prettier.format(content(keyType, serverStore), { semi: true, tabWidth: 4, parser: "typescript" });
    fs.writeFile(fileLocation, prettyContent, (err) => {
        if (err) {
            logger.log("Error while creating" + fileLocation)
            return;
        }
        logger.log("File " + fileLocation + " created")
    })
};