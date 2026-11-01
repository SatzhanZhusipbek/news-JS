import AppLoader from './appLoader';
import type { ApiCallback } from './loader';
import type { NewsResponse, SourcesResponse } from '../../types/api';

class AppController extends AppLoader {
    public getSources(callback: ApiCallback<SourcesResponse>): void {
        super.getResp<SourcesResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: ApiCallback<NewsResponse>): void {
        const newsContainer = e.currentTarget;
        const eventTarget = e.target;

        if (!(newsContainer instanceof Element) || !(eventTarget instanceof Element)) {
            return;
        }

        let target: Element | null = eventTarget;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');

                if (!sourceId) {
                    return;
                }

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);

                    super.getResp<NewsResponse>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }

                return;
            }

            target = target.parentElement;
        }
    }
}

export default AppController;
