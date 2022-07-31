import type { WithId } from "mongodb";

export function deleteMongoId(doc: WithId<Document> | any) {
    if (doc?._id) {
        delete doc._id;
    }
    return doc;
}