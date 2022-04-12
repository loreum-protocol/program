import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { LoreumProgram } from "../target/types/loreum_program";

describe("loreum-program", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.LoreumProgram as Program<LoreumProgram>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
