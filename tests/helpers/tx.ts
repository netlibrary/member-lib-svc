import {vi} from "vitest";
import {Session} from "neo4j-driver";
import {Driver} from "neo4j-driver/types/driver.js";
import {testDriver} from "./driver.js";

export const getDriverTxMock = async () => {
    const tx = await testDriver.session().beginTransaction();
    const mockTx = {
        run: vi.fn().mockImplementation(async (query, params) => await tx.run(query, params)),
        commit: vi.fn().mockResolvedValue(undefined),
        commitMock: vi.fn().mockImplementation(() => tx.commit()),
        rollback: vi.fn().mockResolvedValue(undefined),
        rollbackMock: vi.fn().mockImplementation(() => tx.rollback()),
        close: vi.fn().mockResolvedValue(undefined),
        closeMock: vi.fn().mockImplementation(() => tx.close()),
    };

    // Create a mock session
    const mockSession: Partial<Session> = {
        beginTransaction: vi.fn().mockResolvedValue(mockTx),
        close: vi.fn().mockResolvedValue(undefined),
    };

    // Create a mock driver
    const mockDriver: Partial<Driver> = {
        session: vi.fn().mockReturnValue(mockSession),
    };
    return {mockDriver, mockTx};
};