export const BmFilterSvc = {
    getBmSelNameFirst: (matchAll: boolean) => {
        return "bookmark:Bookmark"
    },
    getBmSelector_Further: (matchAll: boolean | undefined | null) => {
        return matchAll ? "" : "MATCH (container)-[:CONTAINS*1..]->(bookmark:Bookmark)"
    }
}