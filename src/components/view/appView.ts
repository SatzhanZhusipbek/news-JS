import News from './news/news';
import Sources from './sources/sources';
import type { NewsResponse, SourcesResponse } from '../../types/api';

export class AppView {
    private readonly news: News;
    private readonly sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsResponse | null | undefined): void {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesResponse | null | undefined): void {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
