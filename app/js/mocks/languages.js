import en_us from '../../resources/translation/en_us.json';
import es_es from '../../resources/translation/es_es.json';

function LanguagesMocks($httpBackend) {
    'ngInject';

    $httpBackend.whenGET('resources/translation/en_us.json').respond(en_us);
    $httpBackend.whenGET('resources/translation/es_es.json').respond(es_es);
}

export default LanguagesMocks;