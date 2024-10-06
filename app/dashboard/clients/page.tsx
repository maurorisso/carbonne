import React from "react";
import { User, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import DashboardPage from "@/components/DashboardPage";

const Page = () => {
  const description = "Find and manage all your clients here.";
  return (
    <DashboardPage title="Clients" description={description}>
      <div>
        <div className="mb-4 h-9 max-w-full lg:mb-5">
          <nav
            className="no-scrollbar flex max-h-9 space-x-1 overflow-x-scroll rounded-md"
            aria-label="Tabs"
          >
            <a
              className="hover:bg-subtle hover:text-emphasis text-default inline-flex items-center justify-center whitespace-nowrap rounded-[6px] p-2 text-sm font-medium leading-4 transition md:mb-0 px-4 py-2.5"
              data-testid="horizontal-tab-Mauro Risso"
              href="/event-types?noTeam"
            >
              <div className="flex items-center gap-x-2">
                <span className="bg-emphasis item-center relative inline-flex aspect-square justify-center rounded-full align-top overflow-hidden w-6 h-6 min-w-6 min-h-6">
                  <span className="flex h-full items-center justify-center">
                    <User size={16} />
                  </span>
                </span>
                Mauro Risso
              </div>
            </a>
          </nav>
        </div>

        <div>
          <div className="bg-default border-subtle flex flex-col overflow-hidden rounded-md border">
            <ul
              className="divide-subtle !static w-full divide-y"
              data-testid="event-types"
            >
              {/* Event Type Item */}
              <li>
                <div className="hover:bg-muted flex w-full items-center justify-between transition">
                  <div className="group flex w-full max-w-full items-center justify-between overflow-hidden px-4 py-4 sm:px-6">
                    <button className="bg-default text-muted border-default hover:text-emphasis hover:border-emphasis invisible absolute left-0 -ml-4 mt-8 hidden h-6 w-6 scale-0 items-center justify-center rounded-md border p-1 transition-all group-hover:visible group-hover:scale-100 sm:ml-0 sm:flex lg:left-3">
                      <svg
                        height="16"
                        width="16"
                        className="fill-transparent h-5 w-5"
                        aria-hidden="true"
                      >
                        <use href="#arrow-down"></use>
                      </svg>
                    </button>
                    <div className="relative flex-1 overflow-hidden pr-4 text-sm">
                      <div className="ml-3">
                        <a
                          title="15 Min Meeting"
                          href="/event-types/822555?tabName=setup"
                        >
                          <div>
                            <span
                              className="text-default font-semibold ltr:mr-1 rtl:ml-1"
                              data-testid="event-type-title-822555"
                            >
                              15 Min Meeting
                            </span>
                            <small
                              className="text-subtle hidden font-normal leading-4 sm:inline"
                              data-testid="event-type-slug-822555"
                            >
                              /maurorisso/15min
                            </small>
                          </div>
                          <div className="text-subtle">
                            <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                              <li>
                                <div className="font-medium inline-flex items-center justify-center rounded gap-x-1 bg-emphasis text-emphasis py-1 px-1.5 text-xs leading-3">
                                  <Clock size={16} />
                                  15m
                                </div>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 hidden sm:mt-0 sm:flex">
                      <div className="flex justify-between space-x-2 rtl:space-x-reverse">
                        <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                          <div
                            className="self-center rounded-md p-2"
                            data-state="closed"
                          >
                            <div className="flex h-auto w-auto flex-row items-center">
                              <button
                                type="button"
                                role="switch"
                                aria-checked="true"
                                data-state="checked"
                                value="on"
                                className="bg-brand-default dark:bg-brand-emphasis h-5 w-[34px] rounded-full shadow-none transition focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
                              >
                                <span
                                  data-state="checked"
                                  id="radix-:rs:"
                                  className="h-[14px] w-[14px] ltr:translate-x-[4px] rtl:-translate-x-[4px] ltr:[&amp;[data-state='checked']]:translate-x-[17px] rtl:[&amp;[data-state='checked']]:-translate-x-[17px] block rounded-full transition will-change-transform bg-brand-accent shadow-inner"
                                ></span>
                              </button>
                            </div>
                          </div>
                          <div className="flex ltr:[&amp;>*:first-child]:ml-0 ltr:[&amp;>*:first-child]:rounded-l-md ltr:[&amp;>*:first-child]:border-l rtl:[&amp;>*:first-child]:rounded-r-md rtl:[&amp;>*:first-child]:border-r ltr:[&amp;>*:last-child]:rounded-r-md rtl:[&amp;>*:last-child]:rounded-l-md [&amp;>a]:-ml-[1px] hover:[&amp;>a]:z-[1] [&amp;>button]:-ml-[1px] hover:[&amp;>button]:z-[1] [&amp;_a]:rounded-none [&amp;_button]:rounded-none">
                            <a
                              data-testid="preview-link-button"
                              target="_blank"
                              href="https://cal.com/maurorisso/15min"
                              data-state="closed"
                              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed flex justify-center text-emphasis border border-default bg-default hover:bg-muted focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-opacity-30 disabled:hover:text-muted disabled:hover:border-subtle disabled:hover:bg-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default"
                            >
                              <svg
                                height="16"
                                width="16"
                                className="fill-transparent h-4 w-4"
                                aria-hidden="true"
                              >
                                <use href="#external-link"></use>
                              </svg>
                            </a>
                            <button
                              data-state="closed"
                              type="button"
                              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed flex justify-center text-emphasis border border-default bg-default hover:bg-muted focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-opacity-30 disabled:hover:text-muted disabled:hover:border-subtle disabled:hover:bg-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default"
                            >
                              <svg
                                height="16"
                                width="16"
                                className="fill-transparent h-4 w-4"
                                aria-hidden="true"
                              >
                                <use href="#link"></use>
                              </svg>
                            </button>
                            <button
                              data-state="closed"
                              type="button"
                              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed flex justify-center text-emphasis border border-default bg-default hover:bg-muted focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-opacity-30 disabled:hover:text-muted disabled:hover:border-subtle disabled:hover:bg-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default"
                            >
                              <svg
                                height="16"
                                width="16"
                                className="fill-transparent h-4 w-4"
                                aria-hidden="true"
                              >
                                <use href="#venetian-mask"></use>
                              </svg>
                            </button>
                            <button
                              className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed flex justify-center text-emphasis border border-default bg-default hover:bg-muted focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-opacity-30 disabled:hover:text-muted disabled:hover:border-subtle disabled:hover:bg-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default ltr:radix-state-open:rounded-r-md rtl:radix-state-open:rounded-l-md"
                              id="radix-:r10:"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              data-state="closed"
                              data-testid="event-type-options-822555"
                              type="button"
                            >
                              <svg
                                height="16"
                                width="16"
                                className="fill-transparent h-4 w-4"
                                aria-hidden="true"
                              >
                                <use href="#ellipsis"></use>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-9 mx-5 flex sm:hidden">
                      <button
                        id="radix-:r12:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        data-testid="event-type-options-822555"
                        className="whitespace-nowrap items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed flex justify-center text-emphasis border border-default bg-default hover:bg-muted focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-opacity-30 disabled:hover:text-muted disabled:hover:border-subtle disabled:hover:bg-default h-9 px-4 py-2.5 min-h-[36px] min-w-[36px] !p-2 hover:border-default"
                        type="button"
                      >
                        <svg
                          height="16"
                          width="16"
                          className="fill-transparent h-4 w-4"
                          aria-hidden="true"
                        >
                          <use href="#ellipsis"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="text-default p-4 text-center">
            <button
              disabled
              type="button"
              className="whitespace-nowrap inline-flex items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed text-emphasis hover:bg-subtle focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-transparent disabled:hover:text-muted disabled:hover:border-subtle h-9 px-4 py-2.5"
            >
              No more results
            </button>
          </div>
        </div>
      </div>

      <nav className="pwa:pb-[max(0.625rem,env(safe-area-inset-bottom))] pwa:-mx-2 bg-muted border-subtle fixed bottom-0 left-0 z-30 flex w-full border-t bg-opacity-40 px-1 shadow backdrop-blur-md md:hidden">
        <a
          className="[&amp;[aria-current='page']]:text-emphasis hover:text-default text-muted relative my-2 min-w-0 flex-1 overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm"
          aria-current="page"
          href="/event-types"
        >
          <svg
            height="16"
            width="16"
            className="fill-transparent [&amp;[aria-current='page']]:text-emphasis mx-auto mb-1 block h-5 w-5 flex-shrink-0 text-center text-inherit"
            aria-hidden="true"
            aria-current="page"
          >
            <use href="#link"></use>
          </svg>
          <span className="block truncate">Event Types</span>
        </a>
        <a
          className="[&amp;[aria-current='page']]:text-emphasis hover:text-default text-muted relative my-2 min-w-0 flex-1 overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm"
          href="/bookings/upcoming"
        >
          <div className="absolute right-1 top-1"></div>
          <svg
            height="16"
            width="16"
            className="fill-transparent [&amp;[aria-current='page']]:text-emphasis mx-auto mb-1 block h-5 w-5 flex-shrink-0 text-center text-inherit"
            aria-hidden="true"
          >
            <use href="#calendar"></use>
          </svg>
          <span className="block truncate">Bookings</span>
        </a>
        <a
          className="[&amp;[aria-current='page']]:text-emphasis hover:text-default text-muted relative my-2 min-w-0 flex-1 overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm"
          href="/availability"
        >
          <svg
            height="16"
            width="16"
            className="fill-transparent [&amp;[aria-current='page']]:text-emphasis mx-auto mb-1 block h-5 w-5 flex-shrink-0 text-center text-inherit"
            aria-hidden="true"
          >
            <use href="#clock"></use>
          </svg>
          <span className="block truncate">Availability</span>
        </a>
        <a
          className="[&amp;[aria-current='page']]:text-emphasis hover:text-default text-muted relative my-2 min-w-0 flex-1 overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm"
          href="/apps"
        >
          <svg
            height="16"
            width="16"
            className="fill-transparent [&amp;[aria-current='page']]:text-emphasis mx-auto mb-1 block h-5 w-5 flex-shrink-0 text-center text-inherit"
            aria-hidden="true"
          >
            <use href="#grid-3x3"></use>
          </svg>
          <span className="block truncate">Apps</span>
        </a>
        <a
          className="[&amp;[aria-current='page']]:text-emphasis hover:text-default text-muted relative my-2 min-w-0 flex-1 overflow-hidden rounded-md !bg-transparent p-1 text-center text-xs font-medium focus:z-10 sm:text-sm"
          href="/more"
        >
          <svg
            height="16"
            width="16"
            className="fill-transparent [&amp;[aria-current='page']]:text-emphasis mx-auto mb-1 block h-5 w-5 flex-shrink-0 text-center text-inherit"
            aria-hidden="true"
          >
            <use href="#ellipsis"></use>
          </svg>
          <span className="block truncate">More</span>
        </a>
      </nav>
      <div className="block pt-12 md:hidden"></div>
    </DashboardPage>
  );
};

export default Page;
