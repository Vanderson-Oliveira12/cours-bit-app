import { ArrowUpDown, ListFilter } from 'lucide-react';

import { Search } from '@/shared/components/search';
import { OptionsSelect, type SelectOption } from '@/shared/components/options-select';
import AppContainer from '../../components/AppContainer';
import AppSectionHeader from '../../components/AppSectionHeader';

type CourseCategory = 'development' | 'design' | 'marketing';
type CourseSortBy = 'recent' | 'popular' | 'title';

const categories: SelectOption<CourseCategory | 'all'>[] = [
  { label: 'Todas as categorias', value: 'all' },
  { label: 'Desenvolvimento', value: 'development' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
];

const sortOptions: SelectOption<CourseSortBy>[] = [
  { label: 'Mais recentes', value: 'recent' },
  { label: 'Mais populares', value: 'popular' },
  { label: 'Título: A–Z', value: 'title' },
];

export default function ExploreCoursesPage() {
  return (
    <AppContainer>
      <AppSectionHeader
        title="Explorar cursos"
        description="Descubra cursos para desenvolver suas habilidades."
      />

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <Search containerClassName="lg:flex-1" />

        <OptionsSelect
          options={categories}
          defaultValue="all"
          label="Categoria do curso"
          groupLabel="Categorias"
          placeholder="Categoria"
          icon={<ListFilter />}
          className="lg:w-56"
        />

        <OptionsSelect
          options={sortOptions}
          defaultValue="recent"
          label="Ordenar cursos por"
          groupLabel="Ordenar por"
          placeholder="Ordenar por"
          icon={<ArrowUpDown />}
          className="lg:w-56"
        />
      </div>
    </AppContainer>
  );
}
