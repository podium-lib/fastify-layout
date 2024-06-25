import { HttpIncoming } from "@podium/utils";

declare module "fastify" {
  interface PodiumParams {}

	interface PodiumLocals {
		/**
		 * @see https://podium-lib.io/docs/api/incoming
		 */
		podium: HttpIncoming;
		params: PodiumParams;
	}


	interface FastifyReply {
		app: PodiumLocals;
		/**
		 * This method wraps the provided fragment in a default HTML document before dispatching.
		 *
		 * @param markup The HTML contents of the document
		 * @param args Parameters sent to the template function
		 * @returns {void} Sends the FastifyReply
		 *
	   * @see https://podium-lib.io/docs/api/layout#respodiumsendfragment
		 */
    podiumSend: (markup: unknown, ...args: unknown[]) => void;
	}
}
