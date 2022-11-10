import React from 'react';

const Assessment = () => {
    return (
        <div className='mt-5'>
            <section
                class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center"
            >
                <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div class="mx-auto max-w-xl text-center sm:text-left">
                        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                            One-Stop solution for Visa and Immigration from Bangladesh
                        </h2>

                        <p class="hidden text-gray-500 md:mt-4 md:block">
                            A visa from the Latin charta visa, meaning 'paper that has been seen' is a conditional authorization granted by a polity to a foreigner that allows them to enter, remain within, or leave its territory.
                        </p>

                        <div class="mt-4 md:mt-8">
                            <a
                                href="/"
                                class="inline-block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-rose-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Free Assessment
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt="Violin"
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
                />
            </section>

        </div>
    );
};

export default Assessment;