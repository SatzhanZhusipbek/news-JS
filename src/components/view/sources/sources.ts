import './sources.css';
import type { SourceCard } from '../../../types/api';

class Sources {
    public draw(data: SourceCard[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        const sourcesContainer = document.querySelector<HTMLElement>('.sources');

        if (!sourceItemTemp || !sourcesContainer) {
            return;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const nameElement = sourceClone.querySelector<HTMLElement>('.source__item-name');

            const sourceElement = sourceClone.querySelector<HTMLElement>('.source__item');

            if (!nameElement || !sourceElement) {
                return;
            }

            nameElement.textContent = item.name;
            sourceElement.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });

        sourcesContainer.append(fragment);
    }
}

export default Sources;
