import * as fs from 'fs';
import * as prettier from 'prettier';
import { convertOpenAPiToServerCallStore } from "./convert-open-api-to-server-call"
import { getArgs } from "./get-args";
import { logger } from './logger';
import { GenerateServerStoreArgs } from "./types";

/**
 * 
   @description Getting Content of Store
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
 *
 Generate Server Store from Open API Docs 
 */
export const generateServerStore = async (apiDoc: string, storePath: any) => {
    logger.log("Generating with args: ", { apiDoc, storePath });

    if (storePath.split(".").pop() !== "ts") {
         throw "storePath must be a .ts file";
    };

    const { store: serverStore, keyType } = await convertOpenAPiToServerCallStore(apiDoc);
    const fileLocation = storePath;
    const prettyContent = prettier.format(content(keyType, serverStore), { semi: true, tabWidth: 4, parser: "typescript" });
    fs.writeFile(fileLocation, prettyContent, function (err) {
        if (err) {
            logger.log("Error while creating" + fileLocation)
        } else {
            logger.log("File " + fileLocation + " created")
        }
    })
};