``CALL apoc.trigger.install('neo4j','updateChildPosOnDel',"UNWIND $deletedNodes AS n
MATCH (p:Parent)-[:CONTAINS]->(n)
MATCH (p)-[:HAS]->(pm:ParentMeta)
WITH pm, n.id AS deletedId
SET pm.childPositions = [pos IN pm.childPositions WHERE pos <> deletedId]",  {phase:'before'})``