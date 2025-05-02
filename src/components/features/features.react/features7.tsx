import { MdOutlineCheck, MdOutlineIntegrationInstructions, MdOutlineAutoGraph, MdOutlineManageAccounts, MdOutlinePhonelinkSetup } from "react-icons/md";

export default function Features7() {
  return (
    <div id="features" className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div className="text-center md:text-left">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Plateforme Unifiée</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">La Solution Tout-en-Un</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" // Placeholder image
                    alt="Équipe travaillant ensemble"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 text-center md:text-left">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500 mx-auto md:mx-0">
                Centralisez vos opérations avec notre plateforme intégrée. Gérez vos projets, collaborez avec votre équipe et analysez vos performances depuis une interface unique et cohérente.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <ul role="list" className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <MdOutlineIntegrationInstructions className="h-6 w-6 text-indigo-500" />
                  </div>
                  <span className="ml-3">Intégrations natives avec vos outils favoris.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <MdOutlineAutoGraph className="h-6 w-6 text-indigo-500" />
                  </div>
                  <span className="ml-3">Tableaux de bord personnalisables.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <MdOutlineManageAccounts className="h-6 w-6 text-indigo-500" />
                  </div>
                  <span className="ml-3">Gestion fine des rôles et permissions utilisateurs.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <MdOutlinePhonelinkSetup className="h-6 w-6 text-indigo-500" />
                  </div>
                  <span className="ml-3">Configuration simplifiée et déploiement rapide.</span>
                </li>
                 <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <MdOutlineCheck className="h-6 w-6 text-indigo-500" />
                  </div>
                  <span className="ml-3">Et bien plus encore...</span>
                </li>
              </ul>
              <p className="mt-8 mx-auto md:mx-0">Nous évoluons constamment pour intégrer les dernières innovations et répondre au mieux à vos besoins changeants.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
