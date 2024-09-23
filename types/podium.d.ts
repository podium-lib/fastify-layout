import { HttpIncoming } from '@podium/utils';

declare module 'fastify' {
    interface PodiumParams {}

    interface PodiumHttpIncomingParameters {
        [key: string]: unknown;
    }

    // @podium/layout declares what's on the context. We use the same interface names here to inherit them.

    interface PodiumHttpIncomingContext {
        [key: string]: unknown;
    }

    interface PodiumHttpIncomingViewParameters {
        [key: string]: unknown;
    }

    interface PodiumLocals {
        podium: HttpIncoming<
            PodiumHttpIncomingParameters,
            PodiumHttpIncomingContext,
            PodiumHttpIncomingViewParameters
        >;
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
